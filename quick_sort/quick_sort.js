// 'use strick';
// algorithm quick sort 
const quicksort = (arr) => {

	if (arr.length < 2) {
		return arr;
	} else {
		let pivot = arr[0];
		let less = [];
		let greater = [];
		for (let i = 1; i < arr.length; i++) {
			if (pivot >= arr[i]) {
				console.log("Arr Less: ", arr[i]);
				less.push(arr[i]);
			} else if (pivot < arr[i]) {
				console.log("Arr Greater: ", arr[i]);
				greater.push(arr[i]);
			}
		}
		// console.log("___: ", less);
		// console.log("+++:", greater);
		return quicksort(less).concat(pivot).concat(quicksort(greater));
	}

};
let ar = [10, 5, 2, 10, 3, 10, 10, 3, 2];
console.log(quicksort(ar));


