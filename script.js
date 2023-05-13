const container = document.getElementById("container");
const passwordDiv = document.getElementById("userpassword");
const submitBtn = document.getElementById("submitbtn");

let formValid = false;
let pwvalid = false;

let confirm = () => {
    let pw = document.getElementById("password");
    let cpw = document.getElementById("pwconfirm");

    if (pwvalid = true) {
        cpw.style.backgroundColor = '#FFFFFF'
    }

    if (pw.value !== '' && cpw.value !== '') {
        if (pw.value == cpw.value) {
            pwvalid = true;
            console.log('match');
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
