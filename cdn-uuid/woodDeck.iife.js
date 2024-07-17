(function(uuid2) {
  "use strict";
  const sum = (a, b) => a + b;
  const add = (a, b) => a + b;
  const logUuid = () => {
    console.log(uuid2.v4());
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
})(uuid);
