import React, { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'

function getFirstCount(num: number) {
  console.log(`Function call ${Math.random()}`)
  console.log(`Number: ${num * 2}`)
  return num * 2
}

function Play() {
  const [count, setCount] = useState(() => getFirstCount(2))

  function dec() {
    setCount(currentState => currentState - 1)
  }

  return (
    <>
      <h1>⏳ Another Counter</h1>
      <div className="counter">
        <button onClick={dec}>
          <FaMinus />
        </button>
        <h2>{count}</h2>
        <button onClick={() => setCount(count + 1)}>
          <FaPlus />
        </button>
      </div>
    </>
  )
}

export { Play }
