let compAdd = (User_id && User_username)? `
<a href="#" id="my_site">Мои сайты  
        <div class="mes_el_site" id="mes_el_site">  
            <div class="site_list">
    
                    
            </div>
        <button id="add_site_button">Добавить</button>
    </div>
</a>
` : '';

let btnReg = `<a class="button_header" href="register.html">регистрация</a>`;
let elBtnLog = (!(page == '/templates/register.html')) ? btnReg : btnReg = `<a class="button_header" href="login.html">Войти</a>`;

let compLog = (User_id && User_username) ?   `
<a class="button_header btn_add" href="#">профиль</a>
`: btnReg ;

document.body.innerHTML += `
    <div class='addBlock_Header'>
        <p id='profileUserName'></p>
        <p id='tarifUser'></p>
        <div class='btnsProfile'>
            <a href='#' class='leftdwadawdawd'>Добавить услуги</a>
            <a href='exit.html' class='rightdwadawdawd'>Выйти с аккаунта</a>
        </div>
    </div>
`



let compHeader = `
<header>
<nav>
        <img src="../static/img/logo.svg" alt="">
        <a href="index.html">Главная</a>
        `
    +compAdd+
    `
    </nav>`
        
        + compLog +

    `<div class="add_block_site">
        <h3>Напишите домен</h3>
        <input placeholder="YourDomen.com" type="text" id="domen_input">
        <button id="add_page_site">добавить</button>
    </div>


</header>`;

document.body.innerHTML += compHeader;

document.getElementById('profileUserName').innerHTML = User_username
document.getElementById('tarifUser').innerHTML = 'Тариф: Про'