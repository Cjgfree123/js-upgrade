/* await后面阻塞主题 + await返回值  */

/**
 * 做错了
 * 因为await后面的promise没有扭转状态, 相当于一直pending, 所以await一直在等待。await后面的语句会一直无法执行。
 */
// async function async1() {
//     console.log('async1 start');
//     await new Promise(resolve => {
//         console.log('promise1')
//     })
//     console.log('async1 success');
//     return 'async1 end'
// }
// console.log('srcipt start')
// async1().then(res => console.log(res))
// console.log('srcipt end')



/**
 * 如果await后面是个一直pending的promise, 则await后面一直阻塞无法走到，异步函数也无法返回值
 */
// async function async1() {
//     console.log('async1 start');
//     const p1 = await new Promise(resolve => {
//         console.log('promise1')
//     }).then(() => {
//         console.log('async1 success');
//         return 'async1 end'
//     })
// }
// console.log('srcipt start')
// async1().then(res => console.log(res))
// console.log('srcipt end')
// srcipt start   async1 start    promise1    srcipt end   un(实际没有)



// async function async1() {
//     console.log('async1 start');
//     await new Promise(resolve => {
//         console.log('promise1')
//         resolve('promise1 resolve')
//     }).then(res => console.log(res))
//     console.log('async1 success');
//     return 'async1 end'
// }
// console.log('srcipt start')
// async1().then(res => console.log(res))
// console.log('srcipt end')


/** 异步函数如果没有主动返回值，则相当于返回了undefined */
// async function async1() {
//     await new Promise(resolve => {
//         resolve('promise1 resolve')
//     })
//         .then(res => console.log(res))
//         .then(() => {
//             console.log('内部then: async1 success');
//             return 'async1 end'
//         })
// }
// async1().then(res => console.log('外部then: ', res))



// async function async1() {
//     console.log('async1 start');
//     await new Promise(resolve => {
//         console.log('promise1')
//         resolve('promise resolve')
//     }).then(() => {
//         console.log('async1 success');
//         return 'async1 end'
//     })

// }
// console.log('srcipt start')
// async1().then(res => {
//     console.log(res)
// })
// new Promise(resolve => {
//     console.log('promise2')
//     setTimeout(() => {
//         console.log('timer')
//     })
// })



// async function async1() {
//     console.log("async1 start");
//     await async2().then(() => {
//         console.log("async1 end");
//     });
// }

// async function async2() {
//     console.log("async2");
// }

// console.log("script start");

// setTimeout(function () {
//     console.log("setTimeout");
// }, 0);

// async1();

// new Promise(function (resolve) {
//     console.log("promise1");
//     resolve();
// }).then(function () {
//     console.log("promise2");
// });
// console.log('script end')
