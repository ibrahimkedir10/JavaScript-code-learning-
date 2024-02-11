function queue(arr, nextitem,firstitem,lastitem)
{
    arr = [1,2,3,4,5,];
    nextitem = 6;
    firstitem = arr[1];
    lastitem = arr.length -1 ;

    // reguar array 
    console.log(arr);
    // push next number
    arr.push(nextitem);
    console.log(arr);

    // take out last number out[LIFO]
    arr.pop();
    console.log(arr);

    // remove first element 
    arr.shift(1)
    console.log(arr);
  
}

queue();