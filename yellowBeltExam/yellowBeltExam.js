function removeJoin(element) {
    element = document.querySelector("#joinBtn");
    element.remove();
}
function clickHeart1() {
    let x = document.querySelector("#increaseLikes1");
    let count = x.innerText++;
    return count;
}
function clickHeart2() {
    let x = document.querySelector("#increaseLikes2");
    let count = x.innerText++;
    return count;
}
function clickHeart3() {
    let x = document.querySelector("#increaseLikes3");
    let count = x.innerText++;
    return count;
}
var nameTag = document.querySelector("#searchBtn");
function setName(element) {
    nameTag.innerText = element.value;
}
function searchAny(element) {
    alert("you search" + " " + element.value);
}
function scale(element, value) {
    element.style.transform = "scale(" + value + ")";
}




