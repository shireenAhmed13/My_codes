function insertionSort(arr) {
    let j;
    for (let i = 1; i < arr.length; i++) {
        let current_value = arr[i];
        // console.log("current v", current_value)
        for (j = i - 1; j >= 0 && arr[j] > current_value; j--) {
            arr[j+1] = arr[j]
            //  console.log("array", arr)
        }

        arr[j + 1] = current_value;

    }

    return arr
}


console.log(insertionSort([10, 2, 5, 3,0]))
