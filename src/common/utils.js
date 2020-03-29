export function debounce(func, interval) {
    let timer = null;
    return function (params) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, params);
        }, interval);
    };
}