// complete the following function
// function flatten(arr2d) {
//     var flat = [];
//     // your code here
//     return flat;
// }

// var result = flatten( [ [2, 5, 8], [3, 6, 1], [5, 7, 7] ] );
// console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]
var arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
function flatten(arr) {
    var flat = [];
    for(var i=0;i<arr.length;i++ ){
        for(var j=0;j<arr[i].length;j++){
            flat.push(arr[i][j]);
        }
    }

console.log(flat);
    return flat;
}

var x=flatten(arr);
console.log(x);

// var other = [
//     [1, 2, 3, 4, 5, 6],
//     [2, 7, 4, 1, 5, 5]
// ]













//should get [1,2,3,4,5,6,7,8,9]
// console.log(flatten(arr));
//should get [1,2,3,4,5,6,2,7,4,1,5,5]
// console.log(flatten(other));