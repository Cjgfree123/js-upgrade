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