function checkWord(){
const correct_response = "answers"
const inputElement = document.getElementById('myInput')
let userInput = inputElement.value
userInput = userInput.toLowerCase();
if (userInput === correct_response) {
    alert("Correct. What beats paper + .html")
} 
else {
    alert("nope.")
inputElement.value = "";
}
}