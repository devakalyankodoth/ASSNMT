//javaScript function to get an array and to read the first element of an array. Check whether it is prime or not.

function isprime(arr) {
    let firstelement = arr[0];
    if (arr.length === 0) {
        return "array is empty";
    }
    if (firstelement < 2){
        return "not prime";
    }
    for (let i = 2; i < firstelement; i++){
        if (firstelement % i ===0){
            return "not prime";
        }
    }
    return "prime";
}
console.log(isprime([3,5]));



//find the most frequent item of an array

function mostfrequent(arr) {
    const frequencymap ={};
    let maxelement = arr[0];
    let maxcount =1;
    for (let i =0; i < arr.length; i++) {
        const element = arr[i];
        if (frequencymap[element]) {
            frequencymap[element]++;
        } else{
            frequencymap[element] = 1;
        }
        if (frequencymap[element] > maxcount) {
            maxelement = element;
            maxcount = frequencymap[element]; 
        }
    }
    return maxelement;
}
const arr = [1,3,4,5,2,2];
console.log(mostfrequent(arr));



// Using a for loop to iterate through numbers from 0 to 15.if the current number is odd or even.
for (var x = 0; x <= 15; x++) {
    // Checking if the current number is 0
    if (x === 0) {
        console.log(x + " is even");
    }
    // Checking if the current number is even
    else if (x % 2 === 0) {
        console.log(x + " is even");
    }
    // If the number is not 0 and not even, it is odd
    else {
        console.log(x + " is odd");
    }
}




//find the sum of squares of the elements of an array.
 const array = [1,2,3,4,5]

const squares = array.map(Number => Number * Number);


console.log(squares)

