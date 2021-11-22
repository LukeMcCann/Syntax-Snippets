function callback () {
    const backpack = {'key1': 'value1', 'key2': 'value2'};
    return (function () {
        console.log(backpack.key1);
    })();
}

callback();
