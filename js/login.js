let error = $(".validate");
let loginbtn = $("#loginbtn");
let showpwd = $("#showpwd");
let username = $("#uname");
let password = $("#pwd");
let passwordJS = document.getElementById("pwd");
let savedUname = localStorage.getItem("uname");
let savedPwd = localStorage.getItem("pwd");
error.hide();
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

function encrypt(password) {
    return CryptoJS.MD5(password).toString();
}
function storeLogin(){
    localStorage.setItem("uname", username.val());
    localStorage.setItem("pwd", password.val());
}
function autoSubmit(){
    if(username.length == 0){
        return
    } else {
        validateForm()
    }
}
autoSubmit()
showpwd.on('click', togglePassword);
loginbtn.on('click', validateForm);
password.on('change', validateForm);
/*
let submit = $("#submit")
let error = $(".error")
error.hide()
let info = {
    "vidya" : "123",
    "yuvaraj" : "456",
    "adhithya" : "readMe123",
    "arjun" : "101112"
}
function storeLgin(){
    let uname = $("#uname").val()
    let pwd = $("#pwd").val()
    localStorage.setItem('username', uname);
    localStorage.setItem('passowrd', pwd);
}
function autoFillLogin(){
    let uname = $("#uname")
    let pwd = $("#pwd")
    uname.val(localStorage.getItem('username'))
    pwd.val(localStorage.getItem('passowrd'))
}
autoFillLogin()
function validateForm(){
    let uname = $("#uname").val()
    let pwd = $("#pwd").val()
    console.log(`Username :: ${uname}`)
    console.log(`Password :: ${pwd}`)
    for (const [key, value] of Object.entries(info)) {
        console.log(key + value)
        if(key == uname && value == pwd){
            storeLgin()
            console.log('Sucsees')
            window.location = "webBook.html"
            break
        } else {
            error.show()
    }
    }
}
function autoSubmit(){
    let uname = $("#uname").val()
let pwd = $("#pwd").val()
    if(uname == localStorage.getItem('username') && pwd == localStorage.getItem('passowrd')){
        validateForm()
    } else {
        return
    }
}
autoSubmit()
// let uname = $("#uname").val()
// let pwd = $("#pwd").val()
// // console.log(uname == localStorage.getItem('username') && pwd == localStorage.getItem('passowrd'))
// console.log(`LOCAL SOTRAGE :: username == ${localStorage.getItem('username')}|| password == ${localStorage.getItem('passowrd')}`)
// console.log(uname + pwd )
submit.on("click", validateForm)
*/ 