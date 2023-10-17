// setTimeout(function () {
//     console.log(1)
// }, 0);

// new Promise(function (resolve, reject) {
//     console.log(2);
//     resolve();
// }).then(function () {
//     console.log(3)
// }).then(function () {
//     console.log(4)
// });

// console.log(6);





/**
 *      my: 2 5 10 3 4 1
 * success: 2 10 3 5 4 1
 *  反思: promise内部是同步任务，会立即执行
 */
// setTimeout(function () {
//     console.log(1)
// }, 0);

// new Promise(function (resolve, reject) {
//     console.log(2)
//     for (var i = 0; i < 10000; i++) {
//         if (i === 10) {
//             console.log(10)
//         }
//         i == 9999 && resolve();
//     }
//     console.log(3)
// }).then(function () {
//     console.log(4)
// })
// console.log(5);


// console.log("start");
// setTimeout(() => {
//     console.log("children2")
//     Promise.resolve().then(() =>{
//         console.log("children3")
//     })
// }, 0)

// new Promise(function(resolve, reject){
//     console.log("children4")
//     setTimeout(function(){
//         console.log("children5")
//         resolve("children6")
//     }, 0)
// }).then(res =>{         // flag
//     console.log("children7")
//     setTimeout(() =>{
//         console.log(res)
//     }, 0)
// })

