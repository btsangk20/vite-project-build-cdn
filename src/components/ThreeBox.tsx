import { Canvas } from '@react-three/fiber';

export function ThreeBox() {
  return (
    <Canvas>
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={'hotpink'} />
      </mesh>
    </Canvas>
  );
}
