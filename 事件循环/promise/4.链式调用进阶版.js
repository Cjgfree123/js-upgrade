let p1 = new Promise((resolve, reject) => {
    resolve(1);
})

p1.then(() => {
    return 2;
})
    .then((val) => {
        return new Error('!!!');
    })
    .then(3)
    .then(() => {
    })
    .then((val) => {
        console.log('%c [ p1 then val ]-13', 'font-size:13px; background:pink; color:#bf2c9f;', val)
    });



let p2 = new Promise((resolve, reject) => {
    reject(1);
})

p2.catch(() => {
    console.log('处理了')
    return 2;
})
    .catch((val) => {
        return new Error('!!!');
    })
    .catch(3)
    .catch(() => {
    })
    .catch((val) => {
        console.log('%c [ p2  catch val ]-13', 'font-size:13px; background:pink; color:#bf2c9f;', val)
    });