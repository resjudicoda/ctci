// recursive
const binarySearchRecursive = (array, value, low, high) => {
    if (low > high) return false;
    let mid = Math.floor(low + (high - low) / 2);
    if (value < array[mid]) {
        return binarySearchRecursive(array, value, low, mid - 1)
    }
    if (value > array[mid]) {
        return binarySearchRecursive(array, value, mid + 1, high)
    } else return mid // value = mid so return index of found value
}

const binarySearchRecursiveHelper = (array, value) => {
    let low = 0;
    let high = array.length - 1;
    return binarySearchRecursive(array, value, low, high);
}

//non recursive

const binarySearch = (array, value) => {
    let low = 0;
    let high = array.length - 1;
    let mid;
    while (low <= high) {
        mid = Math.floor(low + (high - low) / 2);
        if (value < array[mid]) {
            high = mid - 1;
        }
        if (value > array[mid]) {
            low = mid + 1;
        }
        if (value == array[mid]) return mid
    }

    return false
}

let array = [1, 3, 4, 6, 7, 8, 9, 10, 12, 15, 17];
console.log(binarySearch(array, 5));