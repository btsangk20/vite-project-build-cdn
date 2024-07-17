import { useState } from 'react';

const Button = () => {
  const [count, setCount] = useState(0);
  return (
    <div
      onClick={() => {
        setCount((prev) => prev + 1);
      }}
    >
      Button {count}
    </div>
  );
};

export default Button;
