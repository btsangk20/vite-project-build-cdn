/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
// import { createRoot } from 'react-dom/client';
import { ButtonHTML } from './components/ButtonHTML';
import { ReactButton } from './components/ReactButton';
import { ThreeBox } from './components/ThreeBox';

function App() {
  const [count, setCount] = useState(0);

  const newWindow = window as any;

  console.log(newWindow);

  return (
    <>
      <ThreeBox />
      <ButtonHTML />
      <ReactButton />
      <div id='component-app'>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
