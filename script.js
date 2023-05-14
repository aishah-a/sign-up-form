const container = document.getElementById("container");
const passwordInput = document.getElementById("password_input");
const pwBox = document.getElementById("password_div");
const submitBtn = document.getElementById("submitbtn");
const pw = document.getElementById("password_input");
const cpw = document.getElementById("pwconfirm");
const confPwBox = document.getElementById("confpassword");

let formValid = false;
let pwvalid = false;

let confirm = () => {
    if (pwvalid = true) {
        cpw.style.backgroundColor = '#FFFFFF'
    }

    if (pw.value !== '' && cpw.value !== '') {
        if (pw.value == cpw.value) {
            pwvalid = true;
            pw.style.border = '1px solid #60993E'
            cpw.style.border = '1px solid #60993E'
        } else {
            pwvalid = false;
            pw.style.border = '1px solid #5C23DC'
            cpw.style.border = '1px solid #D00000'
            cpw.style.backgroundColor = '#FFD6D6'
        }
    }
}

function checkSubmission() {
     if (pwvalid = false) {
        return false;
    }
}

// show password rules
const pwRules = document.createElement('div');
pwRules.setAttribute("class", "pw_rules");
pwRules.innerText = 'Password must be at least 6 characters \n \
Password should include at least one uppercase letter \n \
Password should contain at least one number';


pwBox.addEventListener("click", () => {
    if (pw.value == '');
    pwBox.appendChild(pwRules);
})

passwordInput.addEventListener("blur", () => {
    pwRules.remove();
})

/*
- click, show rules
- if clicked again:
if empty, keep showing rules
if filled out and matches rules, hide rules
*/
