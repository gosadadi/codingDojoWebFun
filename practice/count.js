var count = 1;
var countElement=document.querySelector("#count")
function add1() {
    count++;
    console.log(count);
    countElement.innerText="The count is:"+count;
    console.log(countElement)
}
function substract1() {
    count--;
    console.log(count);
    countElement.innerText="The count is:"+count;
    console.log(countElement)
}
