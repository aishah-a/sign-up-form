// password validation
const form = document.querySelector("form");
const pwDiv = document.querySelector(".password_div");
const confirmDiv = document.querySelector(".confirm_div");
const password = document.querySelector("#password");
const confirmPw = document.querySelector("#pw_confirm");
const submit = document.querySelector("button");

password.value = "";
confirmPw.value = "";

// show rules
const rules = document.createElement("div");
let rulesText = "Password must be at least 8 characters. \n \ Password must contain at least 1 number. \n \ Password must contain at least 1 special character.";

rules.innerText = rulesText;
rules.setAttribute("class", "rules")

password.addEventListener("focus", () => {
    if (password.value == "") {
    pwDiv.appendChild(rules);
    }
})

password.addEventListener("blur", () => {

    rules.remove();
})

// check passwords match

let correctPassword;

const doNotMatch = document.createElement("div");
doNotMatch.setAttribute("class", "match")
doNotMatch.innerText = "Password does not match";

function check() {
    correctPassword = false;
    if (password.value === confirmPw.value) {
        correctPassword = true;
    } else {
        confirmPw.style.border = "2px solid red";
        confirmDiv.appendChild(doNotMatch);
    }
}

// prevent form submission if incorrect password
form.addEventListener("submit", function(e) {
    check();
    if (correctPassword == false) {
        e.preventDefault();
    }
})

confirmPw.addEventListener("blur", () => {
    if (confirmPw.value == "") {
        confirmPw.style.border = "2px solid red";
    } else {
        check();
        if (correctPassword == true) {
            confirmPw.style.border = "none";
        } else {
            confirmPw.style.border = "2px solid red";
        }
    }
    if ((confirm.value != "") && (correctPassword == true)) {
        doNotMatch.remove();
    }
    }
)

password.addEventListener("blur", () => {
    if (password.value == "") {
    password.style.border = "2px solid red";
    } else {
        password.style.border = "none";
    }
})
