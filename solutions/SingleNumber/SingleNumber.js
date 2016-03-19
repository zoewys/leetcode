
var singleNumber = function(nums){
    var i,n;
    nums.sort();
    for(i=0;i<nums.length;i=i+2){
        if(nums[i]!== nums[i+1]){
            n = nums[i];
            break;
        }
    }
    return n;
};

