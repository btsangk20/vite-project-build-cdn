import { sum, add } from './utils/calculator.util';
import { Button } from './components/index';

window.process = {
  env: {
    NODE_ENV: 'production',
  },
};

window.webGDL = {
  add,
  sum,
  Button,
};

// export { sum, Button };
