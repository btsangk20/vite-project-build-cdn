(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(require("three")) : typeof define === "function" && define.amd ? define(["three"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.Three));
})(this, function(THREE) {
  "use strict";
  function _interopNamespaceDefault(e) {
    const n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
    if (e) {
      for (const k in e) {
        if (k !== "default") {
          const d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: () => e[k]
          });
        }
      }
    }
    n.default = e;
    return Object.freeze(n);
  }
  const THREE__namespace = /* @__PURE__ */ _interopNamespaceDefault(THREE);
  const sum = (a, b) => a + b;
  const add = (a, b) => a + b;
  const box = () => {
    const scene = new THREE__namespace.Scene();
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
});
