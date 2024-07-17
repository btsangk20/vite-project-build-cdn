import { useState } from 'react';

export function ReactButton() {
  const [count, setCount] = useState(0);

  return (
    <div
      onClick={() => {
        setCount((count) => count + 1);
      }}
    >
      Button {count}
    </div>
  );
}
