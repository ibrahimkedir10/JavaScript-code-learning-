/*
Given an integer n, return the number of prime numbers that are strictly less than n.

 

Example 1:

Input: n = 10
Output: 4
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
Example 2:

Input: n = 0
Output: 0
Example 3:

Input: n = 1
Output: 0


//counter to store primes
    let counter = 0;
    
    // rever through thte all prossible numbers from n -> 0

    for(let i = n -1; i > 1; i--){
        let isprime = true;
      for(let j = 2; j<i ; j++){
        if(i % j ===0){
            isprime= false;
            break;
        }
      }
      if(isprime){
        counter++
      }

    }

    console.log(counter);

*/

var countPrimes = function(n) {
    // create counter to store primes
    let counter =0;
    // loop through n 
    for(let i =n; i >1 ; i--){
        let primecheck = true;
        for(let j=2 ; j< i; j++){
            if(i%j ===0){
                primecheck = false;
                break;
                
            }
        }
       if(primecheck){
        counter++;
       } 
    }

    console.log(counter);
};

countPrimes(10);

// output : 2,3,5,7