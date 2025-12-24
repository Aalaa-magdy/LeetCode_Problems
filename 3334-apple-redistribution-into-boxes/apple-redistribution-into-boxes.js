var minimumBoxes = function(apple, capacity) {
    let totalApples = apple.reduce((sum,x) => sum+x ,0);

    capacity.sort((a,b)=>b-a);
    let usedBox = 0 , currentCapacity = 0;
    for (let cap of capacity){
        currentCapacity += cap;
        usedBox++;
        if(currentCapacity >= totalApples){
            break;
        }
    }

    return usedBox;
};