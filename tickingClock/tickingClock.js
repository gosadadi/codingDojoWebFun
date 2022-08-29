function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() +
        new Date().getMinutes() * 60 +
        new Date().getHours() * 3600;


}

setInterval(function () {
    var time = getSecondsSinceStartOfDay();
    for(var i=0;i<time;i++){
    document.getElementById("seconds").style.transform = "rotate(360deg)"}
}, 1000);
