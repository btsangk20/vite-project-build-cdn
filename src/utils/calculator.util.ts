// import * as THREE from 'three';

import uuid from 'uuid';

const sum = (a: number, b: number): number => a + b;

const add = (a: number, b: number): number => a + b;

const logUuid = (): void => {
  console.log(uuid.v4());
};

// const box = () => {
//   const scene = new THREE.Scene();

//   return scene.toJSON();
// };

export { sum, logUuid, add };
