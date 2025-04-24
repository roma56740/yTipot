PHPURL = 'https://ca27267.tw1.ru/login.php';
let url_register = window.location.protocol + '//' + window.location.host
let req = new XMLHttpRequest();
let button = document.getElementById('btn_reg');
button.addEventListener('click', function(){
    let username = document.getElementById('username');
    let password = document.getElementById('password');
    let email = document.getElementById('email');
    
    if(username.value && password.value){
        req.open('post', PHPURL);
        req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        req.send(`username=${username.value}&password=${password.value}&email=${email.value}`);

        req.onload = () => {
            let status = JSON.parse(req.responseText).status
            if ( status === 'good' ){
                let idLock = JSON.parse(req.responseText)['id'];
                let usernameLock = JSON.parse(req.responseText)['username'];
                if(idLock && usernameLock){
                    localStorage.setItem('User_id', idLock);
                    localStorage.setItem('User_username', usernameLock);
                    window.location.href = '/templates/index.html'
                }
            }else{
                console.log(status)
                // console.log("error")
            }
        }
    }
})