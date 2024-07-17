import * as THREE from 'three';

const sum = (a: number, b: number): number => a + b;

const add = (a: number, b: number): number => a + b;

const box = () => {
  const scene = new THREE.Scene();

  return scene.toJSON();
};

export { sum, box, add };
