/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
var maximumHappinessSum = function(happiness, k) {
    happiness.sort((a,b)=> b-a);
    let sum = 0 , dec = 0, i =0;
    while (k>0 && i<happiness.length ){
        if (dec > happiness[i]) 
           break;
        sum += (happiness[i] - dec)
        k--;
        dec++;
        i++;
    }
    return sum;
};