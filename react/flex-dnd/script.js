import React from 'react';
import ReactDOMServer  from 'react-dom/server';

let Hello = class {
  test = () => console.log('Hello, Test');
}

var hello = new Hello();
hello.test();
 
let wrap = C => {
  return (
      class extends React.Component {
        constructor(props){
          super(props);
          console.log(props);
        }
        
        componentDidMount(){
          console.log('componentDidMount');
        }
        
        render(){
          const paneStyle = {            
            width: this.props.width,      
            height: this.props.height,
            marginLeft: this.props.marginLeft,
            background: this.props.color,
          };
          
          return (
            <div ref="pane" style={paneStyle}>
            <C/>
            </div>   
          );
        }
      }
  );
};

let C1 = class C1 extends React.Component {
  render(){
    return (<div>C1</div>);
  }
}

console.log(ReactDOMServer.renderToString(<C1/>));

let C1Wrapped = wrap(C1);
console.log(C1Wrapped);
let c1Wrapped =  <C1Wrapped height={101} width={100}/>;
let rendered = ReactDOMServer.renderToStaticMarkup(c1Wrapped);
console.log(rendered);