const correctCode = "19239191971132920"; 
function press(num) {
  document.getElementById("display").value += num;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function checkCode() {
  const entered = document.getElementById("display").value;
  
  if (entered === correctCode) {
    alert("You have deemed yourself to be worthy. holygrail.html");
    
  } else {
    alert("nuh-uh.");
    clearDisplay();
  }
}




