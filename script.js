// form elements
const form = document.querySelector("form");
const pwDiv = document.querySelector(".password_div");
const confirmDiv = document.querySelector(".confirm_div");
const password = document.querySelector("#password");
const confirmPw = document.querySelector("#pw_confirm");
const submit = document.querySelector("button");


// password format rules
const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

const rules = document.createElement("div");
const formatMsg = document.createElement("div");
const doNotMatch = document.createElement("div");


let rulesText = "Password must: \n - be at least 8 characters \n \ - contain at least 1 uppercase \n \ - contain at least 1 lowercase letter \n \ -  contain at least 1 number \n \ - contain at least 1 special character";
rules.innerText = rulesText;
rules.setAttribute("class", "msg")

formatMsg.setAttribute("class", "msg");
formatMsg.innerText = "Your password does not satisfy the requirements.";
let passwordFormat;

// check password format
function validate() {
    passwordFormat = false;
    if (passwordRegex.test(password.value) === true) {
        passwordFormat = true;
    } else {
        passwordFormat = false;
    }
    return passwordFormat;
}

// show rules
password.addEventListener("focus", () => {
    formatMsg.remove();
    if ((password.value == "") || (passwordFormat == false)) {
    pwDiv.appendChild(rules);
    }
})

password.addEventListener("keydown", () => {
    validate();
    if (passwordFormat == true) {
        rules.remove();
        password.style.border = "none";
    } else {
        pwDiv.appendChild(rules);
    }
})

password.addEventListener("blur", () => {
    rules.remove();
    validate();
    if ((passwordFormat === false) && (password.value !="")) {
        pwDiv.appendChild(formatMsg)
    }
})


// check passwords match
doNotMatch.setAttribute("class", "msg")
doNotMatch.innerText = "Password does not match";

password.value = "";
confirmPw.value = "";
let correctPassword;

function invalidBorder(div) {
    div.style.border = "2px solid red"
}

// check password confirmation
function check() {
    correctPassword = false;
    if (password.value === confirmPw.value) {
        correctPassword = true;
        console.log("correct");
        return correctPassword;
    } else if ((password.value != "") && (confirmPw.value !== "")) {
        invalidBorder(confirmPw)
        confirmDiv.appendChild(doNotMatch);
        console.log("incorrect");
        return correctPassword;
    }
}


confirmPw.addEventListener("keyup", () => {
    check();
    if (correctPassword == true) {
        confirmPw.style.border = "none";
        doNotMatch.remove();
    }
})

confirmPw.addEventListener("blur", () => {
    check();
    doNotMatch.remove();
})


// prevent form submission if incorrect password
form.addEventListener("submit", function(e) {
    check();
    validate();
    if ((correctPassword == false) || (passwordFormat == false)) {
        e.preventDefault();
    }
})