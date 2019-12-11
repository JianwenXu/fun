/**
 * state hook
 */
import React, { useState } from 'react';

const Hook1 = () => {
  // 声明一个新的叫做“count”的state变量
  const [ count, setCount ] = useState(0);
  return (
    <div>
      <p>You clicked {count} times.</p>
      <button
        onClick={() => setCount(count + 1)}
      >
        click me
      </button>
    </div>
  );
}

export default Hook1;
