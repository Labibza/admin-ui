import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen bg-neutral-800
      flex flex-col items-center justify-center text-center">
        <div className='flex justify-center items-center space-x-8 animate-bounce'>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="w-24 h-24" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="w-24 h-24 animate-spin" alt="React logo" />
          </a>
        </div>
        <h1 className='text-white  text-5xl font-bold mb-12'>Vite + React</h1>
        <h3 className='text-neutral-400 text-sm mb-8'>MUHAMMAD LABIB ZAENAL AROFI</h3>
        <div className="text-sm space-y-6 mb-8">
          <button onClick={() => setCount((count) => count + 1)} className='bg-neutral-100 py-2 px-4 rounded-lg text-lg'>
            count is {count}
          </button>
          <p className='text-neutral-500'>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
      </div>
      <p className="text-neutral-500">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
