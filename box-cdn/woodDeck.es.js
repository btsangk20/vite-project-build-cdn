import * as THREE from "three";
const sum = (a, b) => a + b;
const add = (a, b) => a + b;
const box = () => {
  const scene = new THREE.Scene();
  return scene.toJSON();
};
window.process = {
  env: {
    NODE_ENV: "production"
  }
};
window.webGDL = {
  add,
  sum,
  box
};
