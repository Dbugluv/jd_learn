import global from './global.js';
// import _ from 'lodash';

// if( process.env.NODE_ENV !== 'production') {
//   console.log('looks like we r in development mode~!')
// }

function component() {
  var element = document.createElement('div');

  element.innerHTML = join(['Hello', 'webpack'], ' ');
  console.log('..', global.test())
  // element.onclick = printMe.bind(null, 'Hello webpack!');
  // button.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
  //   var print = module.default;
  
  //   print();
  // });
  this.alert('Hmmm, this probably isn\'t a great idea...')

  return element;
}

document.body.appendChild(component());

// function component() {
//   var element = document.createElement('pre');
//   // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
//   element.innerHTML = [
//         'Hello webpack!',
//         '5 cubed is equal to ' + cube(5)
//       ].join('\n\n');
//   var btn = document.createElement('button');
//   btn.innerHTML = 'Click me and check the console!';
//   btn.onclick = printMe;
//   element.appendChild(btn);
  
//   return element;
// }

// let element = component();  // 当 print.js 改变导致页面重新渲染时，重新获取渲染的元素
// document.body.appendChild(element);

// if (module.hot) {  // HMR
//   module.hot.accept('./print.js', function() {
//     console.log('accepting the updated printme module!');
//     // printMe();
//     document.body.removeChild(element);
//     element = component();   // 重新渲染页面后，component 更新 click 事件处理
//     document.body.appendChild(element);
//   })
// }