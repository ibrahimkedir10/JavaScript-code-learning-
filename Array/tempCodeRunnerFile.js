// base case:
    if(!nums || nums.length < 2){
        console.log("fail 1")
        return [];
    }

    for(let i = 0; i <nums.length ; i++){
        for(let j = i +1; j< nums.length; j++){
            if(nums[i] + nums[j] === target){
                console.log([i,j]);
                  return [i, j];
            }

        }
      
    }
    console.log("fail 2");
    return [];