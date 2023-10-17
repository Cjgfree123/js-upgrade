// function runAsync(x) {
//     const p = new Promise(r => setTimeout(() => r(x, console.log(x)), 1000))
//     return p
// }
// function runReject(x) {
//     const p = new Promise((res, rej) => setTimeout(() => rej(`Error: ${x}`, console.log(x)), 1000 * x))
//     return p
// }
// Promise.all([runReject(4), runReject(2)])
//     .then(res => console.log('then: ', res))
//     .catch(err => console.log('catch: ', err))



/**
 * 做错了: 
 * promise.all即使提前失败了，已经进行中的任务并不会取消
 */
// function runAsync(x) {
//     const p = new Promise(r => setTimeout(() => r(x, console.log(x)), 1000))
//     return p
// }
// function runReject(x) {
//     const p = new Promise((res, rej) => setTimeout(() => rej(`Error: ${x}`, console.log(x)), 1000 * x))
//     return p
// }
// Promise.all([runAsync(4), runReject(2)])
//     .then(res => console.log('then: ', res))
//     .catch(err => console.log('catch: ', err))


// function runAsync(x) {
//     const p = new Promise(r =>
//         setTimeout(() => r(x, console.log(x)), 1000)
//     );
//     return p;
// }
// function runReject(x) {
//     const p = new Promise((res, rej) =>
//         setTimeout(() => rej(`Error: ${x}`, console.log(x)), 1000 * x)
//     );
//     return p;
// }
// Promise.race([runReject(0), runAsync(1), runAsync(2), runAsync(3)])
//     .then(res => console.log("result: ", res))
//     .catch(err => console.log("catch: ", err));
