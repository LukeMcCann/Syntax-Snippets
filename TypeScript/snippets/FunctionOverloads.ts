type Combinable = string | number;

function add (a: number, b: number): number;
function add (a: string, b: string): string;
function add (a: number, b: string): string;
function add (a: string, b: number): string;
function add(a: Combinable, b: Combinable) : Combinable {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

const result1 = add('test', 1);
result1.split(' ');

const result2 = add(1, 2);
result2.valueOf;
