/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    
   const answer = []

    for(i= 0; i < numRows   ; i++ ){

        const newArray = []

        if( i > 1){
            for(x= 0; x < i+1 ; x++ ){
                if(!answer[i-1][x-1]){
                    newArray[x] = 1
                }else if (!answer[i-1][x]){
                     newArray[x] = 1

                }else{
            newArray[x] = answer[i-1][x] + answer[i-1][x-1]
                }}
        }else{
            for(x= 0; x < i+1 ; x++ ){
                newArray.push(1)
            }
        }
        answer.push(newArray)
    }
    return answer
};

const numRows = 6

console.log(generate(numRows))