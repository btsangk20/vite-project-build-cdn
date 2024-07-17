import * as THREE from '@react-three/fiber';
import { useEffect, useState } from 'react';

export const Button = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    setCount((prev) => prev + 1);
    console.log(count);
  });
  return (
    <THREE.Canvas>
      <mesh>
        <boxBufferGeometry />
        <meshBasicMaterial color='hotpink' />
      </mesh>
    </THREE.Canvas>
  );
};
