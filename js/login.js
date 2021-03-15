function validateForm(){
    let username = document.getElementById("uname").value;
    let password = document.getElementById("pwd").value;
    console.log(password);
    if(checkLogin(username, password)) {
        window.location.assign("https://arjunycoding.github.io/list-king/")
    } else {
        console.log("Are you trying to hack the system!")
    }
}

function checkLogin(username, password) {
    let array = {
        "yuva": "c3a19923c6d95039993edffeba0519e2",
        "vidya": "7cdd5a2b0328204d43822424ae922fb4"
    };
    return array[username] == encrypt(password);
}

function encrypt(password) {
    return CryptoJS.MD5(password).toString();
}
