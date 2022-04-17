const promise: Promise<string> = new Promise((res, rej) => {
    setTimeout(() => {
        res('done!');
    }, 2000);
});

promise.then(() => {
    console.log(promise);
});
