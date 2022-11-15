
let nr_of_buttons,winnerButtonPosition,button;
const submitButton = document.getElementById("submitButton");

function createButtons(){
    nr_of_buttons = document.getElementById("textField").value;
    winnerButtonPosition = Math.floor(Math.random() * nr_of_buttons) + 1;
    for (let i = 1; i <= nr_of_buttons; ++i) {
        button = document.createElement("Button");
        Object.assign(button, {
            id : i,
            innerHTML : '<img src = "normal.png">',
            onclick : () => correctButton(winnerButtonPosition,i),
        })
        document.getElementById("buttons_on_screen").appendChild(button);
    }
}

function correctButton (winnerButtonPosition, clicked_button) {
    if (winnerButtonPosition == clicked_button) {
        document.getElementById(clicked_button).innerHTML = '<img src="happy.png">'; 
    } else {
        document.getElementById(clicked_button).innerHTML = '<img src="sad.png">';
    }
}

function restartGame() {
    document.getElementById('buttons_on_screen').innerHTML='';
    document.getElementById('textField').value = '';
 }

