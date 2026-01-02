function linearSearch(arr, target) {
    for (let i=0; i <arr.length; i++) {
        if (arr[i]==target){
            return `found at index ${i}`
        }
    }
    return 'not found';
}

const arr = ['2','3','4','5','MOMMA','7'];
const target = 'momma';
const result = linearSearch(arr, typeof(target)=='string' ? target.toLowerCase() : target);
console.log(result);