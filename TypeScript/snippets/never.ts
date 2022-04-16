// if we should never produce a return value we use the never type
// this can be useful in circumstances such as where we want to generate an error


const genErr = (message: string, errorCode: number): never => {
    throw { message, errorCode };
    // return 'sadge'; when uncommented this should not compile
}

const res = genErr('Error! something broked!', 500);


console.log(res);
