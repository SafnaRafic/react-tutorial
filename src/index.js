import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import App from './Api';
import './index.css';

// Removing class and creating a new file App.js
// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>Hello, React!</h1>
//       </div>
//     )
//   }
// }
ReactDOM.render(<App />, document.getElementById('root'))