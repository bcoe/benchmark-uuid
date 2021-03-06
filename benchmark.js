// Refs: https://github.com/bestiejs/benchmark.js/issues/237
import _ from 'lodash';
import Benchmark from 'benchmark';

// avoid `Cannot read property 'parentNode' of undefined` error in runScript
const script = document.createElement('script');
document.body.appendChild(script);

// Benchmark could not pick up lodash otherwise
const bm = Benchmark.runInContext({ _ });

// avoid `ReferenceError: Benchmark is not defined` error because Benchmark is assumed to be in window
window.Benchmark = bm;

export default bm;
