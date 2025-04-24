PHPURL = 'https://ca27267.tw1.ru/register.php'
let url_register = window.location.protocol + '//' + window.location.host
let DjangoUrl = 'https://youtip.pythonanywhere.com'
let req = new XMLHttpRequest();
let reqDJ = new XMLHttpRequest();
let api_reg = '/api/register'
let button = document.getElementById('btn_reg');
button.addEventListener('click', function(){
    let username = document.getElementById('username');
    let password = document.getElementById('password');
    let email = document.getElementById('email');
    
    if(username.value && password.value){

        reqDJ.open('get', DjangoUrl + api_reg + `?username=${username.value}&password=${password.value}`)
        reqDJ.send()
        reqDJ.onload = () => {
            let status = JSON.parse(reqDJ.responseText).status
        }


        req.open('get', PHPURL+ `?username=${username.value}&password=${password.value}&email=${email.value}`)
        req.send()
        req.onload = () => {
            let status = JSON.parse(req.responseText).status
            if ( status === 'good' ){
                window.location.href = '/yTipot/templates/login.html'
            }else{
                console.log("error")
            }
        }
    }
})
