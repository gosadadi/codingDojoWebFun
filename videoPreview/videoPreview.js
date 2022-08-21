console.log("page loaded...");
function playVideo(vid) {
    console.log(vid);
    vid.play()
}
function pauseVideo(vid) {
    vid.pause()
    vid.currentTime=0;
    console.log(vid);

}