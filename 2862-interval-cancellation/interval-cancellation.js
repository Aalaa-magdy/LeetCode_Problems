var cancellable = function(fn, args, t) {

    fn(...args); // تشغيل أول مرة فورًا

    const timer = setInterval(() => {
        fn(...args);
    }, t);

    return function cancelFn() {
        clearInterval(timer);
    }

};