# js-upgrade
js核心概念进阶

当前进展到：异步->事件循环 done~


## promise

### 内部

1. Promise是个类。
2. promise内部是同步任务，会立即执行。

### then/catch

1. then嵌套时需要连续放入微任务队列。
2. 主任务优先级高于异步队列中任务，即高于微任务。
3. catch返回值会被透传, 会间隔透传

### 错误捕获

1. promise需要手动捕捉错误，添加.catch或外层try catch, 否则会引起js报错阻塞运行。例如下面：

```
async function fn(){
    await Promise.reject('err~').catch((err) => {
        console.log('手动捕获错误: ', err);
    });
    console.log('xxx');
}
fn();

// 会报错:
[UnhandledPromiseRejection: This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "err~".] {
  code: 'ERR_UNHANDLED_REJECTION'
}
```

### 链式调用

1. demo1中catch通过来追踪p1、来确认promise状态; demo2中p1的状态已经确认、能拿到，所以不存在循环引用的问题。

```
// demo1
const p1 = new Promise((resolve, reject) => {
    reject(1);
}).catch(() => {
    return p1; // [TypeError: Chaining cycle detected for promise #<Promise>]
})

// demo2
const p1 = new Promise((resolve, reject) => {
    reject(1);
})
p1.catch(() => {
    return p1; // promise rejected with the reason "1"
})
```

```
// demo1
const p1 = new Promise((resolve, reject) => {
    resolve(1);
}).then(() => {
    return p1; // [TypeError: Chaining cycle detected for promise #<Promise>]
})

// demo2
const p1 = new Promise((resolve) => {
    resolve(1);
})
p1.then(() => {
    return p1; // Promise { 1 }
})
```

### finally

1. finally不参与值透传

### all

1. promise.all即使提前失败了，已经进行中的任务并不会取消

### promise.resolve/reject

1. promise.resolve本身是同步的, 但是如果要读取到值需要.then/.catch。

```
new Promise((resolve, reject) => { // 相当于Promise.resolve('xx').then(val => console.log(val));
    resolve('xx')
}).then((val) => console.log(val))
```


## 异步函数

### await

```js
async function fn(){
    await bar(); // ...A区, await后面
    // ... B区, await下面
}
```

1. await关键字会确保fn函数**暂停**执行，直到bar完成。（A区）
    - 如果bar是同步的, 就不会有任何延迟。
        - async内部的同步逻辑，会比外部的同步先执行
    - 如果bar是异步的，就会存在延迟，会先执行外部同步任务。
        - 做题技巧：先处于bar事件循环、再处理外部事件循环，然后输出。
2. await**下面**的代码会放入微任务队列中执行。(B区域)
    - 如果有多个await语句，就会分别创建多个微任务，并放到微任务队尾中。
        
        ```
        async function fn(){
            await bar();
            // 下方逻辑会放到微任务队列中
            await foo();
            // 下方逻辑会再次放入微任务队列中
        }
        ```
3. 边界:
    - （永久等待）如果await**后面**的promise没有扭转状态, 相当于一直pending, 会导致await下面一直无法执行；异步函数也无法返回值。
    
    ```js
    async function async1(){
        await new Promise(() => {
            console.log('promise1')
        })
    }
    ```


### 返回值

1. 返回一个Promise。
    - 如果不是promise形态，则转为promise。（如下示例）
    - 如果没有返回值，则相当于返回`Promise<undefined>`。

```js
async function fn(){
    return 333; // return Promise.resolve(333)
}
fn().then(val => console.log(val)); // 333
```
