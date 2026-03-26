var flat = function(arr, n) {
    const result = [];

    function helper(currentArr, depth) {
        for (let item of currentArr) {
            if (Array.isArray(item) && depth < n) {
                helper(item, depth + 1);
            } else {
                result.push(item);
            }
        }
    }

    helper(arr, 0);
    return result;
};