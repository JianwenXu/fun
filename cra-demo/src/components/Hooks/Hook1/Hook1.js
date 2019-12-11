/**
 * state hook
 */
import React, { useState } from 'react';

/**
 * state hook demo
 */
const Hook1 = () => {
  // 声明一个新的叫做“count”的state变量
  const [ count, setCount ] = useState(0);
  // 可以生命多个 state 变量
  // const [ age, setAge ] = useState(18);
  // const [ fruit, setFruit ] = useState('apple');
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
