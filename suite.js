import Benchmark from './benchmark.js';
import randomUUID from 'randomuuid/randomUUID';

// Allow polyfill to be tested in browser:
window.randomUUID = randomUUID;

const suite = new Benchmark.Suite();

// add tests
suite
  .add('uuid module', function () {
    // We load the v4 module via ESM:
    // Refs: https://github.com/uuidjs/uuid#ecmascript-modules
    //
    return uuidv4(); // eslint-disable-line
  })
  .add('randomUUID polyfill', function () {
    return randomUUID();
  })
  .add('crypto.randomUUID()', function () {
    return crypto.randomUUID(); // eslint-disable-line
  })
  // add listeners
  .on('cycle', function (event) {
    const p = document.createElement('p');
    const t = document.createTextNode(`${String(event.target)}`);
    p.appendChild(t);
    document.body.appendChild(p);
  })
  .on('complete', function () {
    const p = document.createElement('p');
    const t = document.createTextNode(`Fastest is  ${this.filter('fastest').map('name')}`);
    p.appendChild(t);
    document.body.appendChild(p);
  })
  // run async
  .run({ async: true });
