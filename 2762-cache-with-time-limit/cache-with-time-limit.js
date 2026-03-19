var TimeLimitedCache = function() {
    this.map = new Map();
};

/** 
 * @param {number} key 
 * @param {number} value 
 * @param {number} duration
 * @return {boolean}
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    const exists = this.map.has(key);

    if (exists) {
        clearTimeout(this.map.get(key).timeoutId);
    }

    
    const timeoutId = setTimeout(() => {
        this.map.delete(key);
    }, duration);

    this.map.set(key, { value, timeoutId });

    return exists;
};

/** 
 * @param {number} key
 * @return {number}
 */
TimeLimitedCache.prototype.get = function(key) {
    if (this.map.has(key)) {
        return this.map.get(key).value;
    }
    return -1;
};

/**
 * @return {number}
 */
TimeLimitedCache.prototype.count = function() {
    return this.map.size;
};