import {useState } from 'react'

export default function App() {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(count => count + 1);
  };

  return (
    <button className="control__btn" onClick={increase}>React counter: {counter}</button>
  )
}