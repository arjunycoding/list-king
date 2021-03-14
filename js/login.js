function validateForm(){
    let username = document.getElementById("uname").value;
    let password = document.getElementById("pwd").value;
    if(username == "vidya" && password == "123"){
        console.log("hi mom")
    } else if(username == "yuva" && password == "456"){
        console.log("hi dad");
    }
}