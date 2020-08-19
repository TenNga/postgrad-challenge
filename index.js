let array = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4]

////////  function to get total from array //////////
const getTotal = (arr) => {
 return arr.reduce((total,num) => {
                return total+num;
                })
}

 

const largestSubarraySum = (arr) => {
 console.log(getTotal(arr))
}

largestSubarraySum(array);