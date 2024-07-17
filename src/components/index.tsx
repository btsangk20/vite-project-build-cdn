import { useState } from 'react';

export function Button() {
  const [count, setCount] = useState(0);
  return (
    <div
      onClick={() => {
        setCount(count + 1);
      }}
    >
      Button {count}
    </div>
  );
}
