let error = $(".validate");
let loginbtn = $("#loginbtn");
let showpwd = $("#showpwd");
let username = $("#uname");
let password = $("#pwd");
let passwordJS = document.getElementById("pwd");
error.hide();
let savedUname = localStorage.getItem("uname");
let savedPwd = localStorage.getItem("pwd");
username.val(savedUname);
password.val(savedPwd);
function togglePassword() {
    if (passwordJS.type == "password") {
        passwordJS.type = "text";
    } else {
        passwordJS.type = "password";
    }
}
function validateForm(){
    if(checkLogin(username.val(), password.val())) {
        error.hide();
        stroeLogin()
        window.location.assign("https://arjunycoding.github.io/list-king/")
    } else {
        error.show();
        stroeLogin();
    }
}

function checkLogin(username, password) {
    let array = {
        "yuva": "c3a19923c6d95039993edffeba0519e2",
        "vidya": "7cdd5a2b0328204d43822424ae922fb4",
        "arjun": "371ce016ae5924a296accf90fd2eb6fb",
        "Adhithya Yuvaraj": "0443af33c9526bf65f91abef00ed776e"
    };
    return array[username] == encrypt(password);
}

function encrypt(password) {
    return CryptoJS.MD5(password).toString();
}
function stroeLogin(){
    localStorage.setItem("uname", username.val());
    localStorage.setItem("pwd", password.val());
}

showpwd.on('click', togglePassword);
loginbtn.on('click', validateForm);