import { select } from 'd3';
import { viz } from './viz';
const container = select('#app').node();
let state = {};

const render = () => {
  viz(container, {
    state,
    setState,
  });
};

const setState = (next) => {
  state = next(state);
  render();
};

render();
