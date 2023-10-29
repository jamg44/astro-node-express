import { createSignal } from "solid-js";

export default function Counter() {
  console.log('Creating solid counter!')
  const [count, setCount] = createSignal(0);
  return (
    <button onClick={() => setCount(count() + 1)}>
      Solid counter button: {count()}
    </button>
  );
}
