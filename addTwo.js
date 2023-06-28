var addTwoNumbers = function(l1, l2) {

    const x = l1.reverse()
    const y = l2.reverse()

    let num1 = ""
    let num2 = ""

    for( let a of x){
        num1 += a.toString()
    }
    for( let a of y){
        num2 += a.toString()
    }
    
   const num3 = Number(num1) + Number(num2)


    return num3.toString().split('').reverse().map(Number)
    
};

console.log(addTwoNumbers([2,4,3],[5,6,4]))