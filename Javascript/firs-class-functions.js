function callMethod(method) {
    return method();
};

function logMethodOutput(method) {
    console.log(method());
};

let method = () => {
    return "Hello Method!";
};

logMethodOutput(() => {
    return "Hello World";
});

logMethodOutput(method);
