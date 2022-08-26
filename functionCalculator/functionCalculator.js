function press(n){
    var displayDiv = document.querySelector("#display");
    displayDiv.innerText =n;
    n++
    return n;
}