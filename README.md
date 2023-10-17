# js-upgrade
js核心概念进阶

当前进展到：异步->事件循环519行

10.js

## promise

### 内部

1. promise内部是同步任务，会立即执行。

### then/catch

1. then嵌套时需要连续放入微任务队列。
2. 主任务优先级高于异步队列中任务，即高于微任务。


### finally

### all

1. promise.all即使提前失败了，已经进行中的任务并不会取消



## 异步函数

### await

```
async function fn(){
    await bar(); // ...A区, await后面
    // ... B区, await下面
}
```

1. await关键字会确保fn函数**暂停**执行，直到bar完成。（A区）
    - 如果bar是同步的, 就不会有任何延迟。
        - async内部的同步逻辑，会比外部的先执行
    - 如果bar是异步的，就会存在延迟，会先执行外部同步任务。
2. await**下面**的代码会放入微任务队列中执行。(B区域)
3. 边界:
    - （永久等待）如果await**后面**的promise没有扭转状态, 相当于一直pending, 会导致await下面一直无法执行；异步函数也无法返回值。
    
    ```
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

```
async function fn(){
    return 333; // return Promise.resolve(333)
}
fn().then(val => console.log(val)); // 333
```
