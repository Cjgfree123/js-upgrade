// Promise.resolve(1).then(2).then(Promise.resolve(3)).then(console.log);

// Promise.resolve(1).then(() => 2).then(() => Promise.resolve(3)).then(console.log);


// Promise.reject('err!!!')
//   .then((res) => {
//     console.log('success', res)
//   }, (err) => {
//     console.log('error', err)
//   }).catch(err => {
//     console.log('catch', err)
//   })


/**
 * 做错了:
 *  promise.resolve/reject都是立即执行的回调
 *  而then/catch/finally是走到了才执行
 *  
 *  finally没有返回值
 */
// Promise.resolve('1')
//   .then(res => {
//     console.log(res) // '1'
//   })
//   .finally(() => {
//     console.log('finally')
//   })
// Promise.resolve('2')
//   .finally(() => {
//     console.log('finally2')
//   	return Promise.resolve('我是finally2返回的值');
//   })
//   .then(res => {
//     console.log('finally2后面的then函数', res)
//   })





function promise1() {
    let p = new Promise((resolve) => {
        console.log('promise1');
        resolve('1')
    })
    return p;
}
function promise2() {
    return new Promise((resolve, reject) => {
        reject('error')
    })
}



// function runAsync (x) {
//     const p = new Promise(r => setTimeout(() => r(x, console.log(x)), 1000))
//     return p
//   }
//   function runReject (x) {
//     const p = new Promise((res, rej) => setTimeout(() => rej(`Error: ${x}`, console.log(x)), 1000 * x))
//     return p
//   }
//   Promise.all([runAsync(1), runReject(4), runAsync(3), runReject(2)])
//     .then(res => console.log(res))
//     .catch(err => console.log(err))

