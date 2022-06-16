import logo from './logo.svg';
import './App.css';
// import img2 from "./logo.svg";


function App() {
  return (
    <div className="App">
        <nav className='nav'>
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
        
    </div>
  );
}

export default App;
