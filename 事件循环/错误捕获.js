// async function async1() {
//     await async2();
//     console.log('async1');
//     return 'async1 success'
// }
// async function async2() {
//     return new Promise((resolve, reject) => {
//         console.log('async2')
//         reject('error')
//     })
// }
// async1().then(res => console.log(res))



// async function fn(){
//     await Promise.reject('err~').catch((err) => {
//         console.log('手动捕获错误: ', err);
//     });
//     console.log('xxx');
// }
// fn();




// async function async1() {
//     await async2()
//         .then(() => {
//             console.log('async1');
//             return 'async1 success'
//         })
// }
// async function async2() {
//     return new Promise((resolve, reject) => {
//         console.log('async2')
//         reject('error')
//     })
// }
// async1().then(res => console.log(res))


// async function async1() {
//     console.log('async1');
//     throw new Error('error!!!')
//     return 'async1 success'
// }
// async1().then(res => console.log(res))




// 做错了
// 原因：await Promise.reject('error!!!')也属于异步任务，应该先执行外部同步任务
// 相当于 new Promise((reject) => reject('error!!!')).catch(e => console.log(e));
async function async1() {
    try {
        await Promise.reject('error!!!')
    } catch (e) {
        console.log(e)
    }
}
async1();
console.log('script start')


// async function async1() {
//     await Promise.reject('error!!!')
//         .catch(e => console.log(e))
//     console.log('async1');
//     return Promise.resolve('async1 success')
// }
// async1().then(res => console.log(res))
// console.log('script start')
// script start  error!!!   async1  async1 success



// let p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log(p) 
//     }, 0)
//     reject(1); // promise rejected with the reason "1"
//     reject(2); 
// });


// catch返回值会被透传, 会间隔透传
// finally不参与值透传
// Promise.reject('Hello')
//     .catch(value => {
//         console.log(value);  // 输出 "Hello"
//         return value;  // 将值透传
//     })
//     .finally(() => {
//         console.log('Finally here!');
//         // 在此处，我们不能直接访问value
//     })
//     .then(value => {
//         console.log(value);  // 输出 "Hello"
//         // 在此处，我们可以访问透传的value
//     });


