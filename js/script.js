function init(){
//add your javascrip between these two lines of code
 
// Get the elements from the HTML page
const input = document.getElementById("entryinput");
const button = document.getElementById("entrybutton");
const output = document.getElementById("textoutput");

// Add an event listener to the button
button.addEventListener("click", function() {
    const message = input.value;

    // Show an alert with your name and the message
    alert("Shermya Wellington: " + message);

    // Change the h2 heading to show only the message
    output.textContent = message;
});
}







window.addEventListener('load', init);
