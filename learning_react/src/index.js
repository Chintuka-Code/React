import React from 'react';
import ReactDom from 'react-dom';

const root = document.getElementById('root');
// ReactDom.render(<p>hello</p>, root, hello());

// function hello() {
//   console.log('jsx');
// }

// Render Multiple Elements

// Method First
// ReactDom.render([<h1>hello</h1>, <h3>Sir</h3>], root);

// Method Second
// ReactDom.render(
//   <div>
//     <h1>hello</h1> <h3>Sir</h3>
//   </div>,
//   root
// );

// Fragment Important
ReactDom.render(
  <React.Fragment>
    <h1>hello</h1> <h3>Sir</h3>
  </React.Fragment>,
  root
);
