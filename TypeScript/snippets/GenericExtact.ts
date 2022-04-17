function extract<T extends object, U extends keyof T>(
    obj: T,
    key: U,
) : T[U] {
    return obj[key];
}

const res = extract({ name: 'Jon' }, 'name');

console.log(res);
