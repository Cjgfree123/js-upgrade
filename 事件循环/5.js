
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



async function async1() {
    console.log('async1 start');
    await async2();
    setTimeout(function() {
        console.log('setTimeout1')  // 这一部分代码会放入到 promise 的微任务队列中。
    },0)
}
async function async2() {
    setTimeout(function() {
        console.log('setTimeout2')
    },0)
}
console.log('script start');
setTimeout(function() {
    console.log('setTimeout3');
}, 0)
async1();
new Promise(function(resolve) {
    console.log('promise1');
    resolve();
}).then(function() {
    console.log('promise2');
});
console.log('script end');
