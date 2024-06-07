function bubbleSort(arr)
{

    for(let i=arr.length;i>=0;i--)
        { 
            for(let j=0;j<i-1;j++)
                {
                    console.log(arr[j] , arr[j+1])
                    if (arr[j]>arr[j+1])
                        {
                            let temp=arr[j]
                            arr[j]=arr[j+1]
                            arr[j+1]=temp
                            console.log("swap")
                        }
                }
                console.log(arr)
        }

        return arr
}



///thr is one more i --> arr.length
/// j--<arr.length-i-1


console.log("the final array",bubbleSort([2,3,1,6,0]))