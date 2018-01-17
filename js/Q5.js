

function createToDo(){
  var todo = document.createElement("div");
  var span = document.createElement("span");

  var input = document.getElementById("input").value;
  if (input == "") {
    input = "廢文一篇";
  }
  span.innerHTML = input;
  todo.appendChild(span);


// todolist color
  if (urgent = document.getElementById("urgent").checked) {
    this.parentNode.firstChild.style.color = "red";
  } else {
    this.parentNode.firstChild.style.color = "darkgreen";
  }

/* replace */
  var replaceButton = document.createElement("button");
  replaceButton.onclick = function() {
    var input = document.getElementById("input").value;
    if( input == "" ) {
      alert("你並沒有輸入任何文字");
      return;
    }
    this.parentNode.firstChild.innerHTML = input;
    document.getElementById("input").value = ""; 
  }
  replaceButton.textContent = "R";
  todo.appendChild(replaceButton);


/* remove */
  var removeButton = document.createElement("button");
  removeButton.onclick = function() {
    var check = confirm("是否已完成這個事項？"); 
    if(!check){
      return;
    }
    this.parentNode.firstChild.style.color = "gray";
    this.parentNode.removeChild(replaceButton);
    this.parentNode.removeChild(removeButton);
  }
  removeButton.textContent = "V";
  todo.appendChild(removeButton);

  document.getElementById("todolist").appendChild(todo);
  document.getElementById("input").value = "";
}