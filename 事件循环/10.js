/** 多个await */

async function testSometing() {
    console.log("执行testSometing");
    return "testSometing";
}

async function testAsync() {
    console.log("执行testAsync");
    return Promise.resolve("hello async");
}

async function test() {
    console.log("test start...");
    const v1 = await testSometing();
    console.log(v1); // testSometing
    const v2 = await testAsync();
    console.log(v2); // hello async
    console.log(v1, v2);
}

test();

var promise = new Promise(resolve => {
    console.log("promise start...");
    resolve("promise");
});
promise.then(val => console.log(val));

console.log("test end...");
