/**
 * Created by karlkim on 8/14/14.
 */
var customMatchers = {
    toBeAReasonableExpenses: function(){
        return {
            compare: function(actual){
                var pass = actual.isReasonable();
                var judgement = pass ? 'unreasonable': 'reasonable';

                return {
                    pass: pass,
                    message: 'Expected expense to be a ' + judgement + ' expense.'
                }
            }
        };
    }
}