const isPalindrome = function(x) {
    const y =
    x.toString()
    .split('')
    .reverse()
    .join('')
    console.log(y)


    if(x === Number(y)){
        return true
    }else{
         return false
    }
};

console.log(isPalindrome(1251))