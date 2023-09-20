var login = new Object();

login.userName = 'admin'
login.password ='@admin123'

document.getElementById('btnLogin').addEventListener("click" ,function(){
    var UN = document.getElementById("txtUserName").value;
    var PW = document.getElementById("txtPassword").value;
    if (UN== ' ' || PW ==' '){
        alert('vui long nhap day du thong tin')
    }
    else if (UN != login.userName || PW != login.password){
        alert('nhap sai userName hoac PassWord \n vui long nhap lai')
    }
    else alert('dang nhap thanh cong')
})