var merge = function(nums1, nums2) {
    var m = nums1.length;
    var n = nums2.length;
  
    // base case - n = 0 
    if (n === 0 && m > 0) {
      return nums1;
    } else if (n > 0 && m === 0) {
      return nums2;
    }
// assuming both arrays are > 0
  // go through array removing 0 starting from the back of array
  var ignored = m - n;
  for (let i = m - 1; i >= 0 && ignored > 0; i--) {
    nums1.pop();
    ignored--;
  }

  // concatenate nums2 to nums1
  nums1.push(...nums2);

  return nums1;
};

var nums1 = [1, 2, 3, 0, 0, 0];
var nums2 = [2, 3, 4];

console.log(merge(nums1, nums2));