function login(){
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username == 'admin' && password == 'admin'){
        window.location.href="list.html";
    }        
    else{
        alert("Tài khoản hoặc mật khẩu không chính xác!");
    }
}
