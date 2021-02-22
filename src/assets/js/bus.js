import _Promise from '@babel/runtime-corejs3/core-js-stable/promise';
import mitt from 'mitt';

new _Promise((resolve) => {
  // eslint-disable-next-line
  console.log('Promise 执行');
  resolve(true);
}).then((str) => {
  // eslint-disable-next-line
  alert(str);
});
export default mitt();
