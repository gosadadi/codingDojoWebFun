var animalImage = document.querySelector("#animal_Image");
function pickCat(element) {
    element.style.backgroundColor="goldenrod";
    animalImage.src = "cat.jpg"
}
function pickDog(element) {
    element.style.backgroundColor="blue";
    animalImage.src = "dog.jpg"
}
