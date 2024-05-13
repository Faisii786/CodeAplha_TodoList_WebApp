const inputBox = document.getElementById("taskInput");
const ListofTask = document.getElementById("taskList");

function addTask(){
  if(inputBox.value == ''){
    alert("You must write something");
  }
  else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;

    ListofTask.appendChild(li);
    // cross icon
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = '';
  saveData()
}

// task completed or delete
ListofTask.addEventListener("click", function(e){
  if(e.target.tagName === 'LI'){
    e.target.classList.toggle('checked');
    saveData()
  }
  else if(e.target.tagName === 'SPAN'){
    e.target.parentElement.remove();
    saveData()
  }
},false);

// save browser
function saveData(){
  localStorage.setItem("data", ListofTask.innerHTML);
}
function showData(){
  ListofTask.innerHTML = localStorage.getItem("data");
}
showData()