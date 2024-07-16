import { sum } from './utils/calculator.util';
import { Button } from 'antd';

window.process = {
  env: {
    NODE_ENV: 'production',
  },
};

window.webGDL = {
  sum,
  Button,
};
