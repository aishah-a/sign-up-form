const container = document.getElementById("container");
const passwordInput = document.getElementById("password_input");
const pwBox = document.getElementById("password_div");
const submitBtn = document.getElementById("submitbtn");
const pw = document.getElementById("password_input");
const cpw = document.getElementById("pwconfirm");
const confPwBox = document.getElementById("confpassword");
const form = document.getElementById('form_body').elements;

let formValid = false;
let pwValid = false;
let confirmPw = false;

let confirm = () => {
    if (confirmPw = true) {
        cpw.style.backgroundColor = '#FFFFFF'
    }

    if (pw.value !== '' && cpw.value !== '') {
        if (pw.value == cpw.value) {
            confirmPw = true;
            pw.style.border = '1px solid #60993E'
            cpw.style.border = '1px solid #60993E'
        } else {
            confirmPw = false;
            pw.style.border = '1px solid #5C23DC'
            cpw.style.border = '1px solid #D00000'
            cpw.style.backgroundColor = '#FFD6D6'
        }
    }
}


// show password rules
const pwRules = document.createElement('div');
pwRules.setAttribute("class", "pw_rules");
pwRules.innerText = 'Password must be at least 6 characters \n \
Password should include at least one uppercase letter \n \
Password should contain at least one number';


passwordInput.addEventListener("focus", () => {
    if (pw.value == '');
    pwBox.appendChild(pwRules);
})

passwordInput.addEventListener("blur", () => {
    pwRules.remove();
})


passwordInput.addEventListener("keydown", () => {
    // test that password matches regex
    if (/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,32}$/.test(pw.value) == true) {
        pw.style.border = '1px solid #60993E';
        pwValid = true;
        return true;
    }
})

function validateForm() {
    if (pwValid == true && confirmPw == true) {
        console.log('valid');
        return true;
    } else {
        console.log('invalid');
        return false;
    }
}


const confError = document.createElement('div');
confError.setAttribute("class", "cpw_error");
confError.innerText = 'Passwords do not match';

cpw.addEventListener("focus", () => {
    if (confirmPw == false) {
        confPwBox.appendChild(confError);
    } if (confirmPw == true) {
        confError.remove();
    }
})

cpw.addEventListener("blur", () => {
    confError.remove();
})
