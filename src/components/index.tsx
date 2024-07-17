import { Canvas } from '@react-three/fiber';

export function Button() {
  return (
    <Canvas>
      <ambientLight />

      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={'hotpink'} />
      </mesh>
    </Canvas>
  );
}
