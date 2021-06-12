
const findSmallest = (arr) => {
	let smallest = arr[0];
	let smallest_index = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < smallest) {
			smallest = arr[i];
			smallest_index = i;
		}
	}
	return smallest_index;
};

const selectionSort = (arr) => {
	newArr = [];
	let L = arr.length;
	for (let j = 0; j < L; j++) {
		smallest = findSmallest(arr);
		newArr.push(arr[smallest]);
		arr.splice(smallest, 1);
	}
	return newArr;
}
// Test
let a = [5, 3, 4, 2, 10, 190, -10, -39];
console.log(selectionSort(a));