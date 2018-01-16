
/* Q1 */
var state = true;

function toggleLight() {
  var image = document.getElementById("image");
  state = !state;
  image.src = state ? "img/on.jpg" : "img/off.jpg";
}


var timeLeft = 0;
var setting = 0;


function setTime(){
  var time = document.getElementById('time').value;
  if (isNaN(time)) {
    alert('請輸入數字');
    
  }else if (time == ""){
    alert('尚未輸入倒數時間');  
    
  }else {
    timeleft = time;
    setting = setInterval(countDownTimer, 1000);
    document.getElementById("timing").innerHTML = timeleft;
    document.getElementById("time").value = "";
  }
}

function countDownTimer(){
  var img = document.getElementById("image");
  timeleft -= 1 ;
  if (timeleft <= 0) {
    img.src = "img/off.jpg";
    clearInterval(setting);
  }
  document.getElementById("timing").innerHTML = timeleft;
}
