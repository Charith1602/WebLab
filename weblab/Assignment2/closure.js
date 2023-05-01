function Login(userid){
    logins = {"A":"a12","B":"b12","C":"c12","D":"d12"}
    x=10
    //closure
    debugger;
    function login(passw){
        if(logins[userid]===passw){
            console.log("Login successful!!"+x)
        }else{
            console.log("error")
        }
    }

    return login;
}

A = Login("A")
debugger
Login("a12")