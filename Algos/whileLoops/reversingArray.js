function reverse(arr){
    var end=arr.length-1;
    var start=0;
    while(start<end){
        temp=arr[start];
        arr[start]=arr[end];
        arr[end]=temp;
        start ++;
        end --;
    }
return arr;
}
var call=reverse(["a", "b", "c", "d", "e"]);
console.log(call);