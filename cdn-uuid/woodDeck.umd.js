(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(require("uuid")) : typeof define === "function" && define.amd ? define(["uuid"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.uuid));
})(this, function(uuid) {
  "use strict";
  const sum = (a, b) => a + b;
  const add = (a, b) => a + b;
  const logUuid = () => {
    console.log(uuid.v4());
  };
  window.process = {
    env: {
      NODE_ENV: "production"
    }
  };
  window.webGDL = {
    add,
    sum,
    logUuid
  };
});
