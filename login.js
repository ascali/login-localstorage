// Name and Password from the register-form
var name = document.getElementById('username');
var pw = document.getElementById('pw');

// storing input from register-form
function store() {
    localStorage.setItem('username', username.value);
    localStorage.setItem('pw', pw.value);
}

// check if stored data from register-form is equal to entered data in the   login-form
function check() {

    // stored data from the register-form
    var storedName = localStorage.getItem('username');
    var storedPw = localStorage.getItem('pw');
    console.log('storedName '+storedName);
    console.log('storedPw '+storedPw);
    // entered data from the login-form
    var userName = document.getElementById('userNames');
    var userPw = document.getElementById('userPw');

    // check if stored data from register-form is equal to data from login form
    /*if(userName.value !== storedName || userPw.value !== storedPw) {
        alert('ERROR');
    }else {
        alert('You are loged in.');
    }userName.value == storedName && */

    if(userPw.value == storedPw) {
        alert('You are loged in.');
        console.log(localStorage);
    }else {
        alert('ERROR.');
    }
}

//logout
function logout(){
    localStorage.removeItem('username');
    localStorage.removeItem('pw');
}