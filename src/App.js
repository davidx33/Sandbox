import logo from './logo.svg';
import './App.css';
// import img2 from "./logo.svg";
import Page from './components/Page';
import React from 'react';
import { Button } from 'reactstrap';
import Api from './components/Api';
import Api2 from './components/Api2';


function App() {
  const [count, setCount] = React.useState(0);

  function increment() {
    setCount(count + 1)
  }

  function decrement() {
    setCount(count - 1)
  }

  return (
    <div className="App">
      <h1>
        Button Counter
      </h1> 
      <button onClick = {increment}>
        Click Me
      </button>
      <p>{count}</p>
      <button onClick={decrement}>
        Click Me
      </button>
      <Api />
      <Api2 />
        {/* <nav className='nav'>
          <img src = {logo} alt = "" className='image'/>
        </nav>
        <h1>
          Fun Facts About React
        </h1>
        <ul>
          <li>I need a haircut</li>
          <li>I like coding</li>
          <li>Peace on Earth please</li>
          <li>Was made by Facebook</li>
          <li>Super cool</li>
          <li>I hope it gets me a job</li>

        </ul>
        <Page /> */}

    </div>
  );
}

export default App;
