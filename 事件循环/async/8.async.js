// async function foo() {
//     console.log("foo function start~")

//     console.log("内部的代码执行1")
//     console.log("内部的代码执行2")
//     console.log("内部的代码执行3")

//     console.log("foo function end~")
// }


// console.log("script start")
// foo()
// console.log("script end")



// async function foo() {
//     console.log("foo function start~")

//     console.log("中间代码~")

//     // 异步函数中的异常, 会被作为异步函数返回的Promise的reject值的
//     throw new Error("error message")

//     console.log("foo function end~")
// }

// // 异步函数的返回值一定是一个Promise
// foo().catch(err => {
//     console.log("coderwhy err:", err)
// })

// console.log("后续还有代码~~~~~")



// setTimeout(() => {
//     console.log('quick timer');
// }, 0)

// const promise = new Promise((resolve, reject) => {
//     console.log('init promise');
//     process.nextTick(() => {
//         resolve('promise.then');
//     })
// })

// process.nextTick(() => {
//     console.log('nextTick');
// })

// promise.then((res) => {
//     console.log(res);
// })

// setImmediate(() => {
//     console.log('immediate');
// })





// async function fn() {
//     // 会返回一个promise包裹的拒绝状态
//     // 不能用常规try catch捕捉, 解决: 1. catch内捕捉  2.解析出promise包裹的错误状态(async/await) + try/catch
//     throw new Error('error~');
// }
// try {
//     fn().catch((err) => {
//         console.log("err1: ", err);
//     });
// } catch (err) {
//     console.log("err: ", err);
// }

// async function bar(){
//     try{
//         const res = await fn();
//         console.log('%c [ res ]-81', 'font-size:13px; background:pink; color:#bf2c9f;', res)
//     }catch(err) {
//         console.log('%c [ err ]-82', 'font-size:13px; background:pink; color:#bf2c9f;', err)
//     }
// }
// bar();

/**
 * 1. 会接受promise的完成态结果，输出是:  
 * { status: 'fulfilled', value: 111 },
   { status: 'rejected', reason: 111 }

   2. 入参中只要有一个是pending状态(没完成), Promise.allSettled就会一直等待。
   3. throw new Error会阻塞js执行。
 */
// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(111);
//     }, 2000);
// })
// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         throw new Error('xxx');
//         reject(222);
//     }, 3000);
// })

// Promise.allSettled([p1, p2])
//     .then(res => {
//         console.log('%c [ res ]-31', 'font-size:13px; background:pink; color:#bf2c9f;', res)
//     }).catch((err) => {
//         console.log('%c [ err ]-104', 'font-size:13px; background:pink; color:#bf2c9f;', err)
//     })


// setTimeout(() => {
//     console.log('%c [  ]-35', 'font-size:13px; background:pink; color:#bf2c9f;', 'ewew')
// }, 5000);


