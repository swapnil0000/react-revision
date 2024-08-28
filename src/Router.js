import React, { useState, useMemo } from 'react';

const ExampleComponent = () => {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([1, 2, 3, 4, 5]);

  // Memoize the sum of the items array
  const sum = useMemo(() => {
    console.log('Calculating sum...');
    return items.reduce((a, b) => a + b, 0);
  }, [items]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>

      <p>Sum of items: {sum}</p>
      <button onClick={() => setItems([...items, 6])}>Add Item</button>
    </div>
  );
};

export default ExampleComponent;
