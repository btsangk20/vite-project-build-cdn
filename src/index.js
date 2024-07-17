import { sum, logUuid, box } from './utils/calculator.util';
import { ThreeBox } from './components/ThreeBox';
import { ButtonHTML } from './components/ButtonHTML';
import { ReactButton } from './components/ReactButton';

window.process = {
  env: {
    NODE_ENV: 'production',
  },
};

window.webGDL = {
  sum,
  logUuid,
  box,
  ThreeBox,
  ButtonHTML,
  ReactButton,
};

// export { sum, Button };
