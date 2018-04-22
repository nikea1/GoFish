var array = ["8","6","ace", "queen", "3", "jack","2", "king", "9", "5", "10", "4", "7"];

function swap(array,i,j){
	var temp = array[i];
	array[i] = array[j];
	array[j] = temp;
}

console.log(array);

function quicksort(array){
	console.log("start sort");
	console.log(array);
	console.log(array.length);
	if(array.length <= 1){
		console.log("base case 1");
		console.log(array);
		return array;
	}

	if(array.length == 2){
		if(array[0] > array[1])
			swap(array,0,1);
		console.log("base case 2");
		console.log(array);
		return array;
	}
	console.log("pass base cases");
	//pivot is array[0]
	var pivot = array[0];
	var lp = 1;
	var rp = array.length-1;
	console.log("before loop lp:",lp,"rp:",rp);
	//while pointers are not cross
	
	while(lp <= rp){
		//if lp value greater than pivot sop
		console.log("before movement lp:",lp,"rp:",rp);
		while(array[lp] < pivot && lp != array.length-1) lp++;
		while(array[rp] >= pivot && rp !=0) rp--;
		console.log("after movement lp:",lp,"rp:",rp);
		 if(rp > lp){
		 	console.log("before swap",array);
			swap(array, rp, lp);
			console.log("after swap",array);
			rp--;
			lp++;
		}
		else
			break;
	}
	swap(array, 0, rp);
	var arr1 = array.slice(0, rp);
	var arr2 = array.slice(rp+1, array.length);

	return quicksort(arr1).concat(pivot, quicksort(arr2));
}

var array2 = quicksort(array);

console.log(array.sort());
console.log(array2);