var twoSum = function(nums, target) {
  answer =[]

  for ( i=0; i < nums.length; i++ ){
    
  const thing = nums.find(element=> element + nums[i]  === target)
 

  const x = nums.indexOf(thing)
//   console.log(x)


if(thing || thing === 0)

{  if(x != i ){

    if(!answer.includes(x)){

    answer.push(x)}
   if(!answer.includes(i)){
    answer.push(i)
    }
    }
  }}
  

  return answer

      
};

const nums = [0,4,3,0]
const target = 0

twoSum(nums, target);