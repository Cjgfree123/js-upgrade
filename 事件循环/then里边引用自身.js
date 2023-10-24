// const p1 = new Promise((resolve, reject) => {
//     reject(1);
// }).catch(() => {
//     return p1; // [TypeError: Chaining cycle detected for promise #<Promise>]
// })

// const p1 = new Promise((resolve, reject) => {
//     reject(1);
// })
// p1.catch(() => {
//     return p1; // promise rejected with the reason "1"
// })

// const p1 = new Promise((resolve, reject) => {
//     resolve(1);
// }).then(() => {
//     return p1; // [TypeError: Chaining cycle detected for promise #<Promise>]
// })

// const p1 = new Promise((resolve) => {
//     resolve(1);
// })
// p1.then(() => {
//     return p1; // Promise { 1 }
// })


// ======================================

// const p1 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve('resolve3');
//         console.log('timer1')
//     }, 0)
//     resolve('resovle1');
//     resolve('resolve2');
// }).then(res => {
//     console.log(res)
//     setTimeout(() => {
//         console.log(p1)
//     }, 1000)
// }).finally(res => {
//     console.log('finally', res)
// })


// 做错了
// 打印p1时, p1没有声明完成
// const p1 = new Promise((resolve) => {
//     resolve('resovle1');
// }).then(() => {
//     console.log(p1) // Promise{pending}
// })

// const p1 = new Promise((resolve) => {
//     resolve('resolve1');
// })
// p1.then(() => {
//     console.log(p1); // Promise{resolve1}
// })


// const p2 = new Promise((resolve) => {
//     resolve('resovle1');
// }).then(res => {
//     setTimeout(() => {
//         console.log(p2) // Promise{un}
//     }, 1000)
// })


// const p3 = new Promise((resolve) => {
//     resolve(1);
// })
// p3.then((res) => {
//     setTimeout(() => {
//         console.log(p3); // Promise{1}
//     }, 2000);
// })


// =====================================

const p1 = new Promise((resolve) => {
    resolve('resovle1');
    return 'res1';
}).then(res => {
    console.log(res)
    setTimeout(() => {
        console.log('p1: ', p1) 
    }, 1000)
}).finally(res => {
    console.log('finally', res)
})

// output: resovle1;  finally un; p1 un
// 微:  resovle1    
// 宏:  console.log('p1: ', p1) 1s; 