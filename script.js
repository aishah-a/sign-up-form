// password validation

const pwDiv = document.querySelector(".password_div");
const confirmDiv = document.querySelector(".confirm_div");
const password = document.querySelector("#password");
const confirm = document.querySelector("#pw_confirm");


let correctPassword = false;

// check passwords match

function checkPassword() {
    if (password.value === confirm.value) {
        
        correctPassword = true // add styling later

        console.log("correct"); // remove
    }
}

const rules = document.createElement("div");
let rulesText = "Password must be at least 8 characters. \n \ Password must contain at least 1 number. \n \ Password must contain at least 1 special character.";

rules.innerText = rulesText;
rules.setAttribute("class", "rules")


password.addEventListener("focus", () => {
    pwDiv.appendChild(rules);
})

password.addEventListener("blur", () => {

    rules.remove();
})