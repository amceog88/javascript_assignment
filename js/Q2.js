"use srtict"

function validate (){

  var nric = document.getElementById("nric");
  var code = nric.value;
  if(code == ""){
    alert("身分證欄位不能空白！");
    return;
  } else if( !isNaN(code)){
    alert("你是外國人嗎？");
    return;
  } else if( code.length != 10 ) {
    alert("長度錯誤");
    return;
  } else if(code.search(/^[A-Z]/) == -1){
    alert("格式錯誤");
    return;
  } else if( code == "A123456789"){
    document.getElementById("result").innerHTML = "歡迎謝先生";
    /* A123456789真有其人 */
  } else {
    if(code[1] == "1"){
     document.getElementById("result").innerHTML = "歡迎Y先生";
    }
    else if(code[1] == "2"){
      document.getElementById("result").innerHTML = "歡迎X小姐";
    } else {
      alert("格式錯誤");
      return;
    }
  }

  
}