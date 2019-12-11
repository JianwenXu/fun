import React, { useEffect, useState } from 'react';
/**
 * useEffect demo
 * 它跟 class 组件中的 componentDidMount、componentDidUpdate 和 componentWillUnmount 具有相同的用途，只不过被合并成了一个 API.
 * 该组件会在React更新DOM后会设置一个页面标题
 */
const Hook2 = () => {
  const [ count, setCount ] = useState(0);

  // 相当于 componentDidMount 和 componentDidUpdate
  useEffect(() => {
    // 使用浏览器的 API 更新页面标题
    document.title = `You clicked ${count} times.`;

    // 副作用函数还可以通过返回一个函数来指定如何“清除”副作用。
    // return () => {

    // };
  });

  // 跟 useState 一样，你可以在组件中多次使用 useEffect

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

export default Hook2;
