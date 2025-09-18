import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card flex flex-col items-center gap-4">
        <button
          className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-200 font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <input
          type="text"
          value="Tailwind v4.1.13"
          readOnly
          className="text-center text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 text-white rounded-lg shadow-inner px-4 py-2 border-2 border-white outline-none focus:ring-2 focus:ring-cyan-300 transition-all duration-200 w-60 select-all cursor-pointer"
        />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
