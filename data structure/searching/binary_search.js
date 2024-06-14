

function binarySearch(arr,num){
    // add whatever parameters you deem necessary - good luck!
    let start =0
    let end =arr.length-1
    let mid=start+end/2
   
    
while(num != arr[mid] && start<end)
{
    
    if (num<mid)
    {
     end =end-1
    }
    else
    {
        start =start+1 
    }

    mid=start+end/2
       
}
   
if(arr[mid] === num)
    {
        return mid
    }

    else{
        return -1
    }
}

console.log(binarySearch([1,2,3,4,5,11,10],11) )// 1
