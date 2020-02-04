import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          I was changed on the feature branch
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn
        </a>
      </header>
    </div>
  );
}

export default App;

fetch('https://backend.ladder.io/rest/widgets?container_id=e81f3f32d4e64488203d837d&container_type=plan', {
  headers: new Headers({
    'Connection': 'keep-alive',
    'Accept':'application/json',
    'Content-Type':'application/json',
    'Authorization':'Bearer 086361465c76ad4faeb9d9d6da21c70745de42efeb2e7b9db279baa6b3662b2c4080507a0c1af121e5bd833e8bfb6436'
  })
})
.then(response => response.json())
.then(data => {
  console.log(data)
})
.catch(error => console.error(error))