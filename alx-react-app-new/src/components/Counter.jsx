// src/components/Counter.jsx
import { useState } from 'react';

function Counter() {
  // Initialize state with count = 0
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* Display the current count */}
      <p>Current Count: {count}</p>

      {/* Buttons for counter actions */}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;

