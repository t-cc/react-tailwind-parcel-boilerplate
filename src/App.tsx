import * as React from 'react';
import reactLogo from './assets/logo.svg';

export default function App() {
  return (
    <div className="App text-center">
      <header className="flex flex-col">
        <img src={reactLogo} className=" w-2/3 mx-auto animate-spin" style={{'animationDuration': '10s'}} alt="logo" />
        <p className='text-white'>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="text-blue-200 hover:text-blue-300"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}
