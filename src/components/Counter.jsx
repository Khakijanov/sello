import React, { useState, useEffect } from 'react';

const Counter = ({ onChange }) => {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(prevCount => prevCount - 1);
    }
  };

  const handleChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value)) {
      setCount(value);
    } else {
      setCount(0);
    }
  };

  useEffect(() => {
    onChange(count);
  }, [count, onChange]);

  return (
    <div className="w-1/2 flex items-center justify-start gap-2 py-2 rounded-md">
      <button
        onClick={decrement}
        className="counter-button w-10 h-10 flex items-center justify-center rounded-l-md bg-red-100 text-red-600"
      >
        -
      </button>
      <input
        type="number"
        value={count}
        onChange={handleChange}
        className="counter-input w-16 text-center text-lg font-semibold border border-gray-300 rounded-md"
      />
      <button
        onClick={increment}
        className="counter-button w-10 h-10 flex items-center justify-center rounded-r-md bg-green-100 text-green-600"
      >
        +
      </button>
    </div>
  );
}

export default Counter;
