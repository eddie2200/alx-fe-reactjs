import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{
      border: '1px solid gray',
      padding: '15px',
      margin: '15px',
      borderRadius: '8px',
      width: '250px',
      textAlign: 'center',
      backgroundColor: '#f5f5f5'
    }}>
      <h2>Counter App</h2>
      <p style={{ fontSize: '20px', marginBottom: '15px' }}>Current Count: {count}</p>
      
      <button 
        onClick={() => setCount(count + 1)} 
        style={{ margin: '5px', padding: '8px 12px' }}
      >
        Increment
      </button>
      
      <button 
        onClick={() => setCount(count - 1)} 
        style={{ margin: '5px', padding: '8px 12px' }}
      >
        Decrement
      </button>
      
      <button 
        onClick={() => setCount(0)} 
        style={{ margin: '5px', padding: '8px 12px' }}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;

