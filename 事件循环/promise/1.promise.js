/**
 * 做错1次
 *   原因: then嵌套时需要连续放入微任务队列
 */
// console.log('start')

// setTimeout(function () {
//     console.log('setTimeout')
// }, 0)

// Promise.resolve().then(function () {
//     console.log('promise1')
// }).then(function () {
//     console.log('promise2')
// })

// console.log('end')





// console.log('start');
// setTimeout(() => {
//     console.log('children2');
//     Promise.resolve().then(() => {
//         console.log('children3');
//     })
// }, 0);

// new Promise(function(resolve, reject) {
//     console.log('children4');
//     setTimeout(function() {
//         console.log('children5');
//         resolve('children6')
//     }, 0)
// }).then((res) => {
//     console.log('children7');
//     setTimeout(() => {
//         console.log(res);
//     }, 0)
// })


/**
 * 我: 2/3/4/end
 * 正确: 3/end/2/4
 * 
 * 原因：先入事件循环队列，再执行；同步任务优先级要高于微任务。
 */
// const p = function() {
//     return new Promise((resolve, reject) => {
//         const p1 = new Promise((resolve, reject) => {
//             // setTimeout(() => {
//             //     resolve(1)
//             // }, 0)
//             resolve(2)
//         })
//         p1.then((res) => {
//             console.log(res);
//         })
//         console.log(3);
//         resolve(4);
//     })
// }


// p().then((res) => {
//     console.log(res);
// })
// console.log('end');



// function asyncFunc() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Hello");
//     }, 1000);
//   });
// }

// asyncFunc().then(console.log);
// console.log("World");



// function functionOne() {
//   console.log('1. Function One log');
//   setTimeout(() => {
//     console.log('2. Function One setTimeout');
//   }, 0);
//   Promise.resolve().then(() => {
//     console.log('3. Function One Promise');
//   });
// }

// function functionTwo() {
//   console.log('4. Function Two log');
//   setTimeout(() => {
//     console.log('5. Function Two setTimeout');
//   }, 0);
//   Promise.resolve().then(() => {
//     console.log('6. Function Two Promise');
//   });
// }

// functionOne();
// functionTwo();
// log: 1. Function One log 4. Function Two log
// 微: 3. Function One Promise  6. Function Two Promise
// 宏: console.log('2. Function One setTimeout');(0s)   5. Function Two setTimeout(0s)


// const p1 = new Promise((resolve, reject) => {
//   console.log(1);
//   resolve();
//   reject();
// })
//   .then(() => {
//     console.log(2);
//     throw Error('err');
//   })
//   .then(() => {
//     console.log(3);
//   })
//   .catch((err) => {
//     console.log('%c [ err ]-56', 'font-size:13px; background:pink; color:#bf2c9f;', err)
//     console.log(4);
//   })
// console.log('p1', p1);


// TODO: 做错了
// const promise = new Promise((resolve, reject) => {
//   console.log(1);
//   console.log(2);
// });
// promise.then(() => {
//   console.log(3); // 因为没有resolve/reject语句, 所以then里边走不到!!!
// });
// console.log(4);



// 做错了
// const promise1 = new Promise((resolve, reject) => {
//   console.log('promise1')
//   resolve('resolve1')
// })
// const promise2 = promise1.then(res => {
//   console.log(res) 
// })
// console.log('1', promise1);
// console.log('2', promise2); // pending



// const fn = () => (new Promise((resolve, reject) => {
//   console.log(1);
//   resolve('success')
// }))
// fn().then(res => {
//   console.log(res)
// })
// console.log('start')



// const fn = () => {
//   return new Promise((resolve, reject) => { // 当你调用 fn() 时，它的函数体（包括 new Promise 的构造函数）才会执行。
//     console.log(1);
//     resolve("success");
//   })
// };
// console.log("start");
// fn().then(res => {
//   console.log(res);
// });


// console.log('start')
// setTimeout(() => {
//   console.log('time')
// })
// Promise.resolve().then(() => {
//   console.log('resolve')
// })
// console.log('end')


// 当状态扭转后，才会将then回调放入微任务队列
const promise = new Promise((resolve, reject) => {
    console.log(1);
    setTimeout(() => {
        console.log("timerStart");
        resolve("success");
        console.log("timerEnd");
    }, 0);
    console.log(2);
});
promise.then((res) => {
    console.log(res);
});
console.log(4);