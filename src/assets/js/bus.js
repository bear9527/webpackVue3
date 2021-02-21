
import mitt from 'mitt';

new Promise((resolve) => {
  // eslint-disable-next-line
  console.log('Promise 执行');
  resolve(true);
}).then((str) => {
  // eslint-disable-next-line
  alert(str);
});
export default mitt();
