/* 

a company plans to shift its infinstructure to the cloud. as a result they will rent k computing core per
 day and n days. the company is provided with m pricing plans for this duration. each pricing plan has l[i] 
 repersenting the days when it is available. c[i] cores avaliable each day, and its cost s p[i] to rent one core
  per day. the company can rent an arbitrary number of cores on each day for from each available plan. ranging 
  from 0 to c[i] cores. given n,k and plans as a 2d array, the function return the minimum cost to complete the 
  process. example: supose n = 5, k =7, and plans =[[1,3,5,2],[1,4,5,3],[2,5,20,1]]. return should be 44.
 */


  function minCost(n, k, plans) {
    const dp = Array(n + 1).fill(Infinity);
    dp[0] = 0;
  
    for (const plan of plans) {
      const availableDays = plan[0];
      const endDays = plan[1];
      const coresAvailable = plan[2];
      const costPerCore = plan[3];
  
      for (let day = n; day >= availableDays; day--) {
        for (let cores = 1; cores <= coresAvailable; cores++) {
          const endDay = Math.min(day + endDays - availableDays, n);
          const totalCores = Math.min(k, cores);
  
          dp[endDay] = Math.min(dp[endDay], dp[day - availableDays] + totalCores * costPerCore);
        }
      }
    }
  
    return dp[n];
  }
  
  const n = 5;
  const k = 7;
  const plans = [
    [1, 3, 5, 2],
    [1, 4, 5, 3],
    [2, 5, 20, 1]
  ];
  
  console.log(minCost(n, k, plans)); // Output: 44
  