import React, { useState } from 'react'

function UseStateHook() {
    const [state, setState] = useState(0)
    const increment = () => {
        setState(state + 1)
    }
    const decrement = () => {
        if (state > 0) {
            setState(state - 1)
        }
    }
    // const reset = () => {
    //     setState(0)
    // }
    const addByValue = (value) => {
        setState(state + value)
    }


    return (
        <>
            <div className='counter' >
                <h1>Use State Hook</h1>
            </div>
            <h2>{state}</h2>
            <div>
                <button id='button1' onClick={increment}>Increment</button>
                <button id='button2' onClick={decrement}>Decrement</button>
                <button id='button3' onClick={() => setState(0)}>Reset</button>
                <button id='button4' onClick={() => addByValue(10)}>Add By 10</button>
            </div>

        </>
    )
}

export default UseStateHook