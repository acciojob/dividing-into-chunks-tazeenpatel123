const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let trackingSum=0 , ans=[] , subArr=[];
	for (let i = 0; i < arr.length; i++) {
		if (trackingSum+arr[i]<=n) {
			//include the current element
			subArr.push(arr[i]);
			trackingSum += arr[i];
		}
		else{
			ans.push(subArr);
			//start the new subarray freshly with thecurrent elemnt
			subArr=[arr[i]]
			trackingSum=arr[i];
		}
	}
	ans.push(subArr);
	return ans;
};

// const n = prompt("Enter n: ");
// alert(JSON.stringify(divide(arr, n)));
