
// check passwords
const password = document.querySelector("#password");
const pwConfirm = document.querySelector("#pw_confirm");

let correctPassword = false;

function checkPassword() {
    if (password.value === pwConfirm) {
        console.log("you typed" + password);
        correctPassword = true
    }
}
