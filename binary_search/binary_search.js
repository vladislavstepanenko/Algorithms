// realization binary search
const BS = (list, item) => {
	let low = 0;
	let high = list.length - 1;

	while (low <= high) {
		mid = Math.floor((low + high) / 2);
		guess = list[mid];

		if (guess === item) {
			return mid;
		}
		if (guess > item) {
			high = mid - 1;
		} else {
			low = mid + 1;
		}
	}
	return null;
}

const array1 = [1, 2, 3, 4, 5, 6, 7];
const array2 = [1, 3, 5, 7, 9, 11, 13];
const array3 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(BS(array1, 6));
console.log(BS(array2, 2));
console.log(BS(array3, 50));
