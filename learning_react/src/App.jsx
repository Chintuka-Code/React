import React from 'react';
import ReactDom from 'react-dom';
import Firstcomponents from './First_components';
import Loop from './Loop';
import States from './components/States';
import './index.css';
import Classcomponents from './components/classComponents';

import Data from './components/color';

// let data = [
//     { name: 'sabban', rollno: 14 },
//     { name: 'sabban', rollno: 14 },
//     { name: 'sabban', rollno: 14 },
//     { name: 'sabban', rollno: 14 },
//     { name: 'sabban', rollno: 14 },
//     { name: 'sabban', rollno: 14 },
//   ];

const root = document.querySelector('#root');

// ReactDom.render(<Loop />, root);
ReactDom.render(
  <>
    <States />
    <br />
    <Classcomponents name="sabban" />
    <br />
    <Data info=" change class color  compoents" />
  </>,
  root
);

// Props In react

// ReactDom.render(
//   <>
//     <Loop name="sabban" />
//   </>,
//   root
// );

// function App() {
//   return (
//     <>
//       <Firstcomponents />
//       <h1 className="heading">hello</h1>
//       <h3>Sir</h3>
//     </>
//   );
// }

// export default App;
