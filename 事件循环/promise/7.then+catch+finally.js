// const promise = new Promise((resolve, reject) => {
//     resolve("success1");
//     reject("error");
//     resolve("success2");
// });
// promise
//     .then(res => {
//         console.log("then: ", res);
//     }).catch(err => {
//         console.log("catch: ", err);
//     })


// catch.then链式调用，then会读取catch的返回值（如果没有返回，则读取到的是un）
// const promise = new Promise((resolve, reject) => {
//     reject("error");
//     resolve("success2");
// });
// promise
//     .then(res => {
//         console.log("then1: ", res);
//     }).then(res => {
//         console.log("then2: ", res);
//     }).catch(err => {
//         console.log("catch: ", err);
//     }).then(res => {
//         console.log("then3: ", res); // "then3: " undefined  catch()也会返回一个Promise，且由于这个Promise没有返回值，所以打印出来的是undefined。
//     })


// Promise.resolve(1)
//     .then(res => {
//         console.log(res); // 1
//         return 2; // return 2会被包装成resolve(2)
//     })
//     .catch(err => {
//         return 3;
//     })
//     .then(res => {
//         console.log(res); // 2
//     });


// then透传需要满足：入参为函数+返回普通值/不返回(返回undefined)
// new Promise((resolve) => {
//     resolve(1);
// })
//     .then((num) => {
//         console.log('%c [ then 1 ]-63', 'font-size:13px; background:pink; color:#bf2c9f;', num) // 1
//     })
//     .then((num) => {
//         console.log('%c [ then2 ]-66', 'font-size:13px; background:pink; color:#bf2c9f;', num) // un
//     })
//     .finally((num) => 9999)
//     .then((num) => {
//         console.log('%c [ then3 ]-68', 'font-size:13px; background:pink; color:#bf2c9f;', num) // un
//     })
