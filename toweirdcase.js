// Here is the link to this JavaScript challenge in codewars.com
// https://www.codewars.com/kata/52b757663a95b11b3d00062d/train/javascript

function toWeirdCase(string){
// Here, we concatenate a space at the end of the given string so we can set up the condition of detecting a space in each iteration, we also assigned a variable for the length of the sting to stringlength
string = string.concat(' ')
stringlength = string.length

// Here we use the for loop and iterate through all the elements of the string. We set up the if condition so that when it finds a space within the string we will push the elements prior to the space into the array arr. We set the index j to 0 and add i to it in every iteration to satisfy the relationship of the indices. We will also notice that we have concatenated a space at every iteration so that we can separate each word on the final output
arr = []
j = 0
for(i=0; i<=stringlength-1; i++){
	if(string[i] === ' '){
        // console.log(j,i)
		arr.push(string.slice(j, i).concat(' '))
		j = i + 1
	}	
}
// console.log(`This is arr ${arr}`)

// Here, we use the for loop, and we iterate through the array arr2. The outside for loop will iterate through the elements of the arr2, the nested for with the index of j will iterate through the letters of each string element. Then we create another array arr3 so we can push the elements in the if condition inside the nested for loop
arr3 = []
for(i=0; i<=arr.length-1; i++){
	// console.log(arr2[i])
	for(j=0; j<=arr[i].length-1; j++){
		// console.log(arr2[i][j])
        
        if(j % 2 == 0){
            // console.log(arr2[i][j].toUpperCase())
            arr3.push(arr[i][j].toUpperCase())
        } else {
            // console.log(arr2[i][j])
            arr3.push(arr[i][j])
        }
     
	}
}
// console.log(arr3.toString())
// Here, we use the replace function with the 'g' for global
arrstring = arr3.toString()
const result = arrstring.replace(/,/g, '');
console.log(result);
}

toWeirdCase('weird string case')
toWeirdCase('String')
toWeirdCase('We are practicing JavaScript coding')