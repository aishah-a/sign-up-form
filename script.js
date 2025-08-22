// password validation
const form = document.querySelector("form");
const pwDiv = document.querySelector(".password_div");
const confirmDiv = document.querySelector(".confirm_div");
const password = document.querySelector("#password");
const confirm = document.querySelector("#pw_confirm");
const submit = document.querySelector("button");


// show rules
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

// check passwords match

let correctPassword = false;

function checkPassword() {
    if (password.value === confirm.value) {
        correctPassword = true
    }
}

// prevent form submission if incorrect password
form.addEventListener("submit", function(e) {
    checkPassword();
    if (correctPassword === false) {
        e.preventDefault();
    }
})


