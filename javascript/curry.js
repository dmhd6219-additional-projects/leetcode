function sum(a, b, c) {
    return a + b + c;
}

function curry(fn) {
    const elems = []
    const f = function(...args) {
        elems.push(...args);
        if (elems.length >= fn.length){
            return fn(...elems);
        }
        return f;
    }
    return f;
}

function curry2(fn) {
    return function inner(...args) {
        if (args.length >= fn.length){
            return fn(...args)
        }
        return (...newArgs) => inner(...args, ...newArgs)
    }
}

console.log(curry(sum)(1, 2, 3, 4, 5, 6)); // 6
console.log(curry(sum)(1, 2)(3)); // 6 const a = curry(sum)(1, 2); a(3) === 6
console.log(curry(sum)(1)(2)(3)); // 6

console.log(curry2(sum)(1, 2, 3, 4, 5, 6)); // 6
console.log(curry2(sum)(1, 2)(3)); // 6 const a = curry(sum)(1, 2); a(3) === 6
console.log(curry2(sum)(1)(2)(3)); // 6