var singleNumber = function(nums) {
       let result = 0;
        //even occurence will nullify
        for(let i=0;i<nums.length;i++){
            result ^= nums[i];
        }
        return result;
    }
    
    
    /*
    Success
Details 
Runtime: 76 ms, faster than 91.77% of JavaScript online submissions for Single Number.
Memory Usage: 41.4 MB, less than 78.41% of JavaScript online submissions for Single Number.

*/
