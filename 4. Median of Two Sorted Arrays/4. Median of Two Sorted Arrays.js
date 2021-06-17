/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
    nums3 = nums1.concat(nums2).sort((x,y) => x-y);
    var a = nums1.length+nums2.length;
    if( a%2 ==0 ){
        return (nums3[a/2]+nums3[a/2-1])/2
    }
    else if( a%2 !=0 ){
        return nums3[(a-1)/2];
    }
};

/*看解答
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
/*
 var findMedianSortedArrays = function(nums1, nums2) {
    let i = 0;
    let j = 0;
    
    const merged = []
    
    while(i < nums1.length || j < nums2.length){
        
        const numA = nums1[i]
        const numB = nums2[j]
        
        if(numA <= numB || numB === undefined){
            //a < b或是numb空了就pusha
            merged.push(numA)
            i++;
        } else if( numB < numA || numA === undefined) {
            //a < b或是numb空了就pushb
            merged.push(numB)
            j++;
        }
    }
    
    const medianIdx = Math.floor((merged.length - 1) / 2);
    
    return merged.length % 2
        ? merged[medianIdx]
        : (merged[medianIdx] + merged[medianIdx + 1]) / 2
};
*/