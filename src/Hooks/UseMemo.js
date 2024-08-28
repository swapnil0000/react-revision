import React, { useState, useMemo } from 'react';


const Sum = React.memo(({ numbers }) => {
    console.log('Sum component is rendering...');
    const total = useMemo(() => {
      console.log('Calculating sum...');
      return numbers.reduce((a, b) => a + b, 0);
    }, [numbers]);
  
    return <div>Total: {total}</div>;
  });

const App = () => {
  const [count, setCount] = useState(0);
  const numbers = [10, 20, 30];

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <p>Count: {count}</p>
      <Sum numbers={numbers} />
    </div>
  );
};

export default App;
