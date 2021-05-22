let error = $(".validate");
let loginbtn = $("#loginbtn");
let showpwd = $("#showpwd");
let username = $("#uname");
let password = $("#pwd");
let passwordJS = document.getElementById("pwd");
let savedUname = localStorage.getItem("uname");
let savedPwd = localStorage.getItem("pwd");
error.hide();
// auto filling usernaem's and passowrds
username.val(savedUname);
password.val(savedPwd);
// hiding and showing passowerd funcion
function togglePassword() {
    if (passwordJS.type == "password") {
        passwordJS.type = "text";
    } else {
        passwordJS.type = "password";
    }
}
// form validation functions
function validateForm(){
    if(checkLogin(username.val(), password.val())) {
        error.hide();
        storeLogin()
        window.location.assign("https://arjunycoding.github.io/list-king/")
    } else {
        error.show();
        storeLogin();
    }
}

function checkLogin(username, password) {
    let array = {
        "yuva": "c3a19923c6d95039993edffeba0519e2",
        "vidya": "7cdd5a2b0328204d43822424ae922fb4",
        "arjun": "360290aedc4d7dd839abc412727b6b00",
        "Adhithya Yuvaraj": "0443af33c9526bf65f91abef00ed776e"
    };
    return array[username] == encrypt(password);
}
// encrypting
function encrypt(password) {
    return CryptoJS.MD5(password).toString();
}
function storeLogin(){
    localStorage.setItem("uname", username.val());
    localStorage.setItem("pwd", password.val());
}
// adding event listeners
showpwd.on('click', togglePassword);
loginbtn.on('click', validateForm);
password.on('change', validateForm);