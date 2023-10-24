// async function async1() {
//     console.log("async1 start");
//     await async2();
//     console.log("async1 end");
// }
// async function async2() {
//     console.log("async2");
// }
// async1();
// console.log('start')
// async1 start   async2   start async1 end



// async function async1() {
//     console.log("async1 start");
//     await async2();
//     console.log("async1 end");
// }
// async function async2() {
//     setTimeout(() => {
//         console.log('timer')
//     }, 3330)
//     console.log("async2");
// }
// async1();
// console.log("start")



/**
 * 做错了: 
 *  async函数没有返回值，它实际上返回了一个立即解决的Promise。
 *  这意味着，一旦async2执行完毕，async1将会继续执行。
 */
// async function async1() {
//     await async2();
//     console.log("async1 end");
// }
// async function async2() {
//     setTimeout(() => {
//         console.log('timer')
//     }, 3330)
// }
// async1();


/**
 * 做错了: 
 *  async内部的同步逻辑，会比外部的先执行
 */
// async function async1() {
//     await async2();
// }
// async function async2() {
//     setTimeout(() => {
//     }, 3330)
//     console.log("async2");
// }
// async1();
// console.log("start")


/**
 * await下面逻辑，相当于放在了
 */
// async function async1() {
//     await async2();
//     console.log("async1 end");

//     new Promise(() => {
//         console.log("async3");
//     }).then(() => {
//         console.log("async1 end......."); x
//     })
// }
// async function async2() {
// }
// async1();
// console.log("start")



// async function async1() {
//     console.log("async1 start");
//     await async2();
//     console.log("async1 end");
//     setTimeout(() => {
//         console.log('timer1')
//     }, 0)
// }
// async function async2() {
//     setTimeout(() => {
//         console.log('timer2')
//     }, 0)
//     console.log("async2");
// }
// async1();
// setTimeout(() => {
//     console.log('timer3')
// }, 0)
// console.log("start")



// async function async1() {
//     console.log("async1 start");

//     new Promise((resolve) => {
//         setTimeout(() => {
//             console.log('timer2')
//         }, 0)
//         console.log("async2");
//         resolve(1);
//     }).then(() => {
//         console.log("async1 end");
//         setTimeout(() => {
//             console.log('timer1') // !!!!!
//         }, 0)
//     })
// }

// async1();

// setTimeout(() => {
//     console.log('timer3') // !!!!
// }, 0)
// console.log("start")
