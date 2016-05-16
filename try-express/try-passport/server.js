import express from 'express';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import bodyParser from 'body-parser';
import session from 'express-session';

let app = express();
app.use(bodyParser.urlencoded({ extended: false }))
const port = 3000;

app.use(session({secret: "-- ENTER CUSTOM SESSION SECRET --"}));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

passport.use(new LocalStrategy(
  function(username, password, done) {
    if(username==='user' && password==='pwd'){
      return done(null, username);
    }
    else {
      return done(null, false);
    }
  }
));

app.post('/login', passport.authenticate('local', {
  successRedirect: '/reports',
  failureRedirect: '/'
}));

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    console.log('req.user', req.user);
    return next();
  }

  // denied. redirect to login
  console.log('access denied');
  res.redirect('/')
}

app.get('/logout', function(req, res){
  console.log('logging out');
  req.logout();
  res.redirect('/');
});

app.get('/reports', function(req, res){
  console.log(req.isAuthenticated());
  res.send('reports');
})

app.get('/protected', ensureAuthenticated, function(req, res) {
  res.send("access granted. secure stuff happens here");
});

app.use(express.static('.'));

app.listen(port, () => console.log(`Listening on port ${port}`));
