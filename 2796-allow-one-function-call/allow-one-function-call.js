var once = function(fn) {
    let called = false;   // علشان نعرف اتنده ولا لا

    return function(...args) {
        if (!called) {
            called = true;
            return fn(...args);
        } else {
            return undefined;
        }
    }
};
