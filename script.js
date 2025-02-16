function getT(){
    var date = new Date();
    var dateLove = new Date("12/02/2024")
    var dateMeet = new Date("07/07/2023")
    var dateKnow = new Date("10/04/2019")
    var timeLove = date.getTime()-dateLove.getTime();
    var timeMeet = date.getTime()-dateMeet.getTime();
    var timeKnow = date.getTime()-dateKnow.getTime();
    var dayLove = Math.floor(timeLove / (3600*24*1000)-0.3333);
    var dayMeet = Math.floor(timeMeet / (3600*24*1000)-0.3333);
    var dayKnow = Math.floor(timeKnow / (3600*24*1000)-0.3333);
    var miniteLove = Math.floor(timeLove / (60000) -78);
    document.getElementById("daylove").innerHTML = "我们在一起"+dayLove+"天啦!";
    document.getElementById("daymeet").innerHTML = "距离第一次见面"+dayMeet+"天啦!";
    document.getElementById("dayknow").innerHTML = "我认识你已经"+dayKnow+"天啦!";
    document.getElementById("minitelove").innerHTML = "我们在一起已经"+miniteLove+"分钟啦";
}

setInterval("getT()", 1000);