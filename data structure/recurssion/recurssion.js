// power
// Write a function called power which accepts a base and an exponent.
//  The function should return the power of the base to the exponent. 
//  This function should mimic the functionality of 
// Math.pow()  - do not worry about negative bases and exponents.


// let power_with_recurssion =(num,pow)=>{
    
//     if(pow ===1)
//     {
//         return num
//     }
//     else{
       
        
//         return num*(power_with_recurssion(num,pow-1))
//     }

// }

// let result =power_with_recurssion(3,3)
// console.log(result)


// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(num,pow){
    {
    
    if(pow ===1)
    {
        return num
    }
    else{
       
        
        return num*(power(num,pow-1))
    }

}
}

console.log(power(2,4))