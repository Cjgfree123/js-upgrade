
/**
 * await fn():
 *  await关键字会确保fn函数暂停执行，直到fn1完成。
 *      但在这种情况下，由于fn1是同步的，所以不会有任何延迟; 
 *      如果fn是异步的，就会存在延迟，会先执行外部同步任务。
 */
// async function fn1(){
//     setTimeout(() => {
//         console.log('fn1');
//     }, 0)
// }
// async function fn(){
//     await fn1();
// }
// fn();
// console.log('main');

// async function async1() {
//     console.log('async1 start')
//     await async2()
//     console.log('async1 end')
// }
// async function async2() {
//     console.log('async2')
// }
// console.log('script start')
// setTimeout(function () {
//     console.log('setTimeout')
// }, 0)
// async1()
// new Promise((resolve) => {
//     console.log('promise1')
//     resolve()
// }).then(function () {
//     console.log('promise2')
// })
// console.log('script end')


// async function async1() {
//     console.log('async1 start');
//     await async2();
//     console.log('async1 end');
// }
// async function async2() {
//     new Promise(function (resolve) {
//         console.log('promise1');
//         resolve();
//     }).then(function () {
//         console.log('promise2');
//     });
// }
// console.log('script start');
// setTimeout(function () {
//     console.log('setTimeout');
// }, 0)
// async1();
// new Promise(function (resolve) {
//     console.log('promise3');
//     resolve();
// }).then(function () {
//     console.log('promise4');
// });
// console.log('script end');



// async function async1() {
//     console.log('async1 start');
//     await async2();
//     setTimeout(function () {
//         console.log('setTimeout1')  // 这一部分代码会放入到 promise 的微任务队列中。
//     }, 0)
// }
// async function async2() {
//     setTimeout(function () {
//         console.log('setTimeout2')
//     }, 0)
// }
// console.log('script start');
// setTimeout(function () {
//     console.log('setTimeout3');
// }, 0)
// async1();
// new Promise(function (resolve) {
//     console.log('promise1');
//     resolve();
// }).then(function () {
//     console.log('promise2');
// });
// console.log('script end');




// const async1 = async () => {
//     console.log('async1');
//     setTimeout(() => {
//         console.log('timer1')
//     }, 2000)
//     await new Promise(resolve => {
//         console.log('promise1')
//     })
//     console.log('async1 end')
//     return 'async1 success'
// }
// console.log('script start');
// async1().then(res => console.log(res));
// console.log('script end');
// Promise.resolve(1)
//     .then(2)
//     .then(Promise.resolve(3))
//     .catch(4)
//     .then(res => console.log(res))
// setTimeout(() => {
//     console.log('timer2')
// }, 1000)




// const async1 = async () => {
//     console.log('async1');
//     setTimeout(() => {
//         console.log('timer1')
//     }, 2000)
//     await new Promise(resolve => { // 默认把await后面的表达式, 当成一个异步任务来处理
//         console.log('promise1') // !!! 注意: 没有状态扭转
//     }).then(() => {
//         console.log('async1 end')
//         return 'async1 success'
//     })
// }
// console.log('script start');
// async1().then(res => console.log(res));
// console.log('script end');
// Promise.resolve(1)
//     .then(2)
//     .then(Promise.resolve(3))
//     .catch(4)
//     .then(res => console.log(res))
// setTimeout(() => {
//     console.log('timer2')
// }, 1000)


// out: script start    async1  script end  promise1     1  timer2  timer1

// 微:
// 宏: timer1(2s)   timer2(1s)



/**
 * new Promise(resolve => {
    console.log('promise1') // 这个相当于同步任务, 会立即执行
   })
 */
// const async1 = async () => {
//     await new Promise(resolve => { // 默认把await后面的表达式, 当成一个异步任务来处理
//         console.log('promise1') // !!! 注意: 没有状态扭转
//     })
// }
// async1();
// console.log('script end');


