function alwaysHungry(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === "food") { console.log("yummy", "yummy"); }
        else {
            console.log("I'm hungry");



        }
    }
}
alwaysHungry([3.14, "food", "pie", true, "food"]);
alwaysHungry([4, 1, 5, 7, 2]);
// 2.High Pass Filter Given an array and a value cutoff, return a new array containing only the values larger than cutoff.
// function highPass(arr, cutoff) {
    var filteredArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > cutoff) {
            filteredArr.push(arr[i]);

        }
    }

    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result);
we expect back [6, 8, 10, 9]
// 3.Given an array of numbers return a count of how many of the numbers are larger than the average.
// var count = 0;
var sum = 0;
function betterThanAverage(arr) {
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];

    }
    var average = sum / arr.length;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > average) {
            count++;
        }

    }

    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4
// 4.Write a function that will reverse the values an array and return them.
// function reverse(arr) {
    var start = 0;
    var end = arr.length - 1;
    while (start<end) {
        var x = arr[start];
        arr[start] = arr[end];
        arr[end] =x;
        start++
        end--;
    }

    return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]
/* 5.Fibonacci Array Fibonacci numbers have been studied for years and appear often in nature. Write a function that will return an array of Fibonacci numbers up to a given length n. Fibonacci numbers are calculated by adding the last two values in the sequence together. So if the 4th value is 2 and the 5th value is 3 then the next value in the sequence is 5.*/
function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    fibArr.length=n;
    var i=0;
    while(i<=n){
        fibArr[i]=fibArr[i]+fibArr[i-1];
        i++
        

    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]





