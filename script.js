const container = document.getElementById("container");
const passwordDiv = document.getElementById("userpassword");

let pwvalid;

let confirm = () => {
    let pw = document.getElementById("password");
    let cpw = document.getElementById("pwconfirm");

    if (pw.value == cpw.value && pw.value !== "") {
        console.log("match");
        pwvalid = true;
    } else {
        pwvalid = false;
        console.log("false");
    }
}




const submitBtn = document.getElementById("submitbtn");
submitBtn.addEventListener("mouseenter", btnHover);

function btnHover() {
    submitBtn.style.background = 'linear-gradient(121.5deg, #5C23DC, #FF3366 90%)'
}

submitBtn.addEventListener("mouseleave", btnReset);

function btnReset() {
    submitBtn.style.background = '#5C23DC'
}

submitBtn.addEventListener("click", greenBtn);

function greenBtn() {
  submitBtn.removeEventListener("mouseenter", btnHover);
  submitBtn.removeEventListener("mouseleave", btnReset);
  console.log("Hello World");
  submitBtn.style.background = 'green';
  submitBtn.innerText = 'Form submitted.';
}

