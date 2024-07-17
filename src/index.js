import { sum } from './utils/calculator.util';
import { Button } from './components/index';
window.process = {
  env: {
    NODE_ENV: 'production',
  },
};

window.webGDL = {
  sum,
  Button,
};
