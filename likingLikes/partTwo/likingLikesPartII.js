let initialLikes = [9, 12, 9];
let neilInitialLikes=initialLikes[0];
let nicholeInitialLikes=initialLikes[1];
let jimInitialLikes=initialLikes[2];
function arrayCount1(initialLikes){
    neilLikes=document.querySelector("#NeilLike");
    neilLikes.innerText=neilInitialLikes;
    neilInitialLikes++;
    return neilInitialLikes; 
}
function arrayCount2(initialLikes){
    nicholeLikes=document.querySelector("#NicholeLike");
    nicholeLikes.innerText=nicholeInitialLikes;
    nicholeInitialLikes++;
    return nicholeInitialLikes; 
}
function arrayCount3(initialLikes){
    jimLikes=document.querySelector("#JimLike");
    jimLikes.innerText=jimInitialLikes;
    jimInitialLikes++;
    return jimInitialLikes; 
}

