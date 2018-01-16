    var state = true;    
    function toggleLight() {
      var image = document.getElementById('image');
      state = !state;
      image.src = state ? "img/on.jpg" : "img/off.jpg";
    }
    var timeLeft = 5;
    function countDownTimer() {
      timeLeft = timeLeft - 1;
      if (timeLeft <= 0) {
        document.getElementById("image").src = "img/off.jpg";
        clearInterval(setting);
      }
      document.getElementById("timer").innerHTML = timeLeft;
    }
    //set timer 
    function setTime(){    
      var input = document.getElementById("input").value;
      //transfer string to integer
      input = parseInt(input);
      //check if input is integer or not
      if(!isNaN(input)){
        document.getElementById("timer").innerHTML = input;      
        timeLeft = input;               
      } else {      
        alert('請輸入數字！');  
        document.getElementById("input").value = "";
      }
      
    }
    var setting = setInterval(countDownTimer, 1000);

