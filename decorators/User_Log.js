let User_id = localStorage.getItem('User_id');
let User_username = localStorage.getItem('User_username');

let page = window.location.pathname;

if(User_id && User_username){
    if(page == '/templates/login.html'){
        window.location.href = '/templates/index.html'
    }else if(page == '/templates/register.html'){
        window.location.href = '/templates/index.html'
    }
}else{
    if(page == '/templates/exit.html'){
        window.location.href = '/templates/index.html'
    }


}