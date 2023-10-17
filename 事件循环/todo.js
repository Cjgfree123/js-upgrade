// 这里边的，目前理解不了，后续再看看

/**
 *  实际:
 *  promise1
    promise2
    resolvePromise resolved
    promise3
 */

/**
 * 我做错的: resolvePromise resolved | p1 |  p2 | p3
 */

// let resolvePromise = new Promise(resolve => {
//     let resolvedPromise = Promise.resolve()
//     resolve(resolvedPromise);
//     // 提示：resolve(resolvedPromise) 等同于：
//     // Promise.resolve().then(() => resolvedPromise.then(resolve));
// })
// resolvePromise.then(() => {
//     console.log('resolvePromise resolved')
// })
// let resolvedPromiseThen = Promise.resolve().then(res => {
//     console.log('promise1')
// })
// resolvedPromiseThen
//     .then(() => {
//         console.log('promise2')
//     })
//     .then(() => {
//         console.log('promise3')
//     })



let resolvePromise = new Promise(resolve => {
    let resolvedPromise = Promise.resolve()
    resolve(resolvedPromise);
    // 提示：resolve(resolvedPromise) 等同于：
    // Promise.resolve().then(() => resolvedPromise.then(resolve));
})
resolvePromise.then(() => {
    console.log('resolvePromise resolved')
})
let resolvedPromiseThen = Promise.resolve().then(res => {
    console.log('promise1')
})
resolvedPromiseThen
    .then(() => {
        console.log('promise2')
    })
// .then(() => {
//     console.log('promise3')
// })



promise1()
    .then(res => console.log(res))
    .catch(err => console.log(err))
    .finally(() => console.log('finally1'))

promise2()
    .then(res => console.log(res))
    .catch(err => console.log(err))
    .finally(() => console.log('finally2'))