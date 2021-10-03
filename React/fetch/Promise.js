const myPromise = new Promise((res, rej) => {
    setTimeout(() => {
        res('Success');
    }, 1000);
});

myPromise.then((val) => console.log(val));
