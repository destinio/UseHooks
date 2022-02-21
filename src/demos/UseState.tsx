/* TODAY: useState 🚀

- Intro and Setup
- class vs functional - quick up-to-date
- destructuring - side quest
- basic
  - Reading Type Defs
  - state and setState
  - rules
- setState - callback and current/prev state
- objects
- Lazy initial state - useState callback
  - Functional updates
- How can I play with this
- Whats Next: useEffect
- More TypeScript (If there is time)

*/

import React, { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'

function UseState() {
  /* Two rules:
  Only Call Hooks at the Top Level of Component (function)

    Don’t call Hooks inside loops, conditions, or nested functions.
    Before any early returns

  Only Call Hooks from React Functions:

  ❌ Don’t call Hooks from regular JavaScript functions. 
      Instead, you can:

  ✅ Call Hooks from React function components.
  ✅ Call Hooks from custom Hooks (we’ll learn about them soon 😎)
  
  */

  const [count, setCount] = useState(0)

  return (
    <div className="counter">
      <h1>⏳ A Counter ⏳</h1>
      <div className="counter-main">
        <button>
          <FaMinus />
        </button>
        <div>{count}</div>
        <button>
          <FaPlus />
        </button>
      </div>
    </div>
  )
}

export { UseState }

/*
NOTES

*/
