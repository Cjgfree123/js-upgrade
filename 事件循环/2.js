/**
 * await会使得当前函数内, 后面的代码被放入微任务队列。
 */
async function async1() {
    console.log('async1 start')
    await async2()
    console.log('async1 end')
}
async function async2() {
    console.log('async2')
}
console.log('script start')
setTimeout(function () {
    console.log('setTimeout')
}, 0)
async1();
new Promise(function (resolve) {
    console.log('promise1')
    resolve();
}).then(function () {
    console.log('promise2')
})
console.log('script end')





// async function async1() {
//     await async2() // await 会使得 async1 后面的代码被放入微任务队列。
//     console.log('async1 end')
// }
// async function async2() {
// }
// setTimeout(function () {
//     console.log('setTimeout')
// }, 0)
// async1();
// new Promise(function (resolve) {
//     console.log('promise1')
//     resolve();
// }).then(function () {
//     console.log('promise2')
// })
// console.log('script end')
