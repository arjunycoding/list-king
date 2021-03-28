let error = $(".validate");
error.hide();
function validateForm(){
    let username = $("#uname").val();
    let password = $("#pwd").val();
    if(checkLogin(username, password)) {
        error.hide();
        window.location.assign("https://arjunycoding.github.io/list-king/")
    } else {
        error.show();
    }
}

function checkLogin(username, password) {
    let array = {
        "yuva": "c3a19923c6d95039993edffeba0519e2",
        "vidya": "7cdd5a2b0328204d43822424ae922fb4",
        "arjun": "451d3eb1573c7ebb70c08dfee9766509",
        "Adhithya Yuvaraj": "0443af33c9526bf65f91abef00ed776e"
    };
    return array[username] == encrypt(password);
}

function encrypt(password) {
    return CryptoJS.MD5(password).toString();
}
