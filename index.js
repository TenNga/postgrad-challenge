let array = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4];
// let array = [1,2,-3,4,5];


////////  function to get total from array //////////
const getTotal = (arr) => {
    return arr.reduce((total,num) => {
                   return total+num;
                   })
   }
   
   const largestSubarraySum = (arr) => {
     let total = 0;
    for(let i=0; i<arr.length;i++)
       total = inner(i,arr,total);

       return total;
   }
   
   const inner = (i,arr,total) => {
     for(let j= i; j<arr.length;j++){
       const sq = arr.slice(i,j+1);
       if(getTotal(sq) > total)
         total = getTotal(sq);
     }
     return total;
   }
   largestSubarraySum(array);