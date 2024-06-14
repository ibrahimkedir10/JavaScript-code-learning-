/*
Max Water Container
You are given an integer array heights where heights[i] represents the height of the 𝑖𝑡ℎ bar.

You may choose any two bars to form a container. Return the maximum amount of water a container can store.

Example 1:

Input: height = [1,7,2,5,4,7,3,6]

Output: 36
Example 2:

Input: height = [2,2,2]

Output: 4


    maxArea(heights) {
         let finalArea = 0;
    for (let i = 0; i < heights.length; i++) {
        for (let j = i + 1; j < heights.length; j++) {
            let h = Math.min(heights[i], heights[j]);
            let w = j - i;
            let area = h * w;
            if (area > finalArea) {
                finalArea = area;
            }
        }
    }
    return finalArea;
}
}
*/

function maxArea(heights) {
    let left = 0;
    let right = heights.length -1;
    let result = 0;

    while(left < right){
        let width = right - left ;
        let length = Math.min(heights[left], heights[right]);
        let area = width * length;
        result = Math.max(result, area);
        if(heights[left] < heights[right]){
            left++;
        }
        else {
            right--;
        }

    }
    return result;
}




