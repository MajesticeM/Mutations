//Version 91
//Create an array
//var arrayA=["hello","Hello","Hi","Hey"];
//Create a for loop that will loop through the array 
/*.for (let index = 0; index < arrayA.length; index++) {
    const element = arrayA[index];
    if (arrayA[0]===array[1]) 
    {
        return true;
    }
    else{
        return false;
    }
    
}
*/

//Version 02
function solution(arrayA) 
{
    for (let index = 0; index < arrayA.length; index++) {
       
        const element = arrayA[index];
        if (arrayA[0]===array[1]) 
        {
            return true;
        }
        else{
            return false;
        }
        
    }
}

console.log(solution([1,1,3,45,6]));
