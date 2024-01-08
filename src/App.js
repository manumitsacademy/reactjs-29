import './App.css';
import React from 'react';

function App() {
  let [count,setCount] = React.useState(0);
  
  const inc = ()=>{
    count++;
    setCount(count);
  }

  const dec = ()=>{
    count--;
    setCount(count);
  }

  return (
    <div>
      <button onClick={dec}>Dec</button>
      <h1>{count}</h1>
      <button onClick={inc}>Inc</button>
    </div>
  );
}

export default App;
