# js-upgrade
js核心概念进阶

# 事件循环

## promise

### 内部

1. Promise是个类。
2. promise内部是同步任务，会立即执行。
3. 当状态扭转后，才会将then回调放入微任务队列.

### then/catch

1. then嵌套时需要连续放入微任务队列。
2. 主任务优先级高于异步队列中任务，即高于微任务。
3. catch返回值会被透传, 会间隔透传


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

2. catch.then链式调用，then会读取catch的返回值（如果没有返回，则读取到的是un）
3. 值透传:
- then透传需要满足：入参为函数+返回普通值/不返回(返回undefined)

### finally

1. finally不参与值透传

### all

1. promise.all即使提前失败了，已经进行中的任务并不会取消

### allSettled

1. 返回每个promise实例的完成态结果，类似如下:

```js
{ status: 'fulfilled', value: 111 },
{ status: 'rejected', reason: 111 }
```

2. 特点:
- 即使提前失败了，已经进行中的任务并不会取消.
- 入参中只要有一个是pending状态(没完成), Promise.allSettled就会一直等待。

### promise.resolve/reject

1. promise.resolve/reject本身是同步的, 但是如果要读取到值需要.then/.catch, 而then/catch属于微任务。

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

1. 实际生效返回值, 一定是promise形态。
    - 如果不是promise形态，则转为promise。（如下示例）
    - 如果没有返回值，则相当于返回`Promise<undefined>`。

```js
async function fn(){
    return 333; // return Promise.resolve(333)
}
fn().then(val => console.log(val)); // 333
```


## 异步编程——错误捕获

1. 常用:
- promise需要手动捕捉错误, 否则会报错未捕捉的promise, 阻塞js运行。 捕捉方式: 手动写.catch.
- async/await捕捉错误方式: try catch.

2. async函数中抛出错误, 相当于执行return new Promise.reject('error message');

```
async function foo() {
    throw new Error("error message")
    console.log("foo function end~") // 这里不会再走到
}
```

3. 其他:
- throw new Error会阻塞js执行。