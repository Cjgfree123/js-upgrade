// setTimeout(() => {
//     console.log('timer1');
//     setTimeout(() => {
//         console.log('timer3')
//     }, 0)
// }, 0)
// setTimeout(() => {
//     console.log('timer2')
// }, 0)
// console.log('start');



// setTimeout(() => {
//     console.log('timer1');
//     Promise.resolve().then(() => {
//         console.log('promise')
//     })
// }, 0)
// setTimeout(() => {
//     console.log('timer2') // 必须等到微任务队列清空后, 才执行宏任务
// }, 0)
// console.log('start')


// Promise.resolve().then(() => {
//     console.log('promise1');
//     const timer2 = setTimeout(() => {
//         console.log('timer2')
//     }, 0)
// });
// const timer1 = setTimeout(() => {
//     console.log('timer1')
//     Promise.resolve().then(() => {
//         console.log('promise2')
//     })
// }, 0)
// console.log('start');



// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('success')
//     }, 1000)
// })
// const promise2 = promise1.then(() => {
//     throw new Error('error!!!') 
// })
// console.log('promise1', promise1)
// console.log('promise2', promise2)
// setTimeout(() => {
//     console.log('promise1-宏', promise1)
//     console.log('promise2-宏', promise2)
// }, 2000)

// console.log("Before error");
// const err = new Error("This is an error");
// console.log("After error"); // 这行代码会正常执行






// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("success");
//         console.log("timer1");
//     }, 1000);
//     console.log("promise1里的内容");
// });
// const promise2 = promise1.then(() => {
//     throw new Error("error!!!");
// });
// console.log("promise1", promise1);
// console.log("promise2", promise2);
// setTimeout(() => {
//     console.log("timer2");
//     console.log("promise1", promise1);
//     console.log("promise2", promise2);
// }, 2000);


const promiseA = new Promise((resolve) => {
    resolve('promiseA');
});

const promiseB = new Promise((resolve) => {
    resolve('promiseB');
})

setTimeout(() => {
    console.log('setTimeout start')
    promiseB.then((value) => {
        console.log('%c [then: promiseB ]-12', 'font-size:13px; background:pink; color:#bf2c9f;', value)
    })
    console.log('setTimeout end')
}, 0)

promiseA.then((value) => {
    console.log('%c [then: promiseA ]-6', 'font-size:13px; background:pink; color:#bf2c9f;', value)
})

queueMicrotask(() => {
    console.log('quene');
})
