
function selectionSort(arr)
{
    for(let i=0;i<arr.length;i++)
        {
            let lowest=i;

            for (j=i+1;j< arr.length;j++)
                {
                    if(arr[j] < arr[lowest])
                        {
                            lowest=j
                        }
                }

                if(lowest!=i)
                    {
                        let temp=arr[i]
                        arr[i]=arr[lowest]
                        arr[lowest]=temp
                    }
        }

      return arr 
}

console.log(selectionSort([2,3,1,6,0]))