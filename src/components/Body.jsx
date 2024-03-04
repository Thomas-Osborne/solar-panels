import reactLogo from '../assets/react.svg'

import { useState } from 'react'

export default function Body() {

    const [count, setCount] = useState(0);

    return (
        <main>
            <div>
                <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>Small text now.</p>
            </div>
      </main>
    )
}