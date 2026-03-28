var compactObject = function(obj) {
    if (Array.isArray(obj)) {
        const res = [];
        
        for (let item of obj) {
            if (item) {
                res.push(compactObject(item));
            }
        }
        
        return res;
    } 
    
    else if (typeof obj === "object" && obj !== null) {
        const res = {};
        
        for (let key in obj) {
            const value = obj[key];
            
            if (value) {
                res[key] = compactObject(value);
            }
        }
        
        return res;
    }
    
    return obj;
};