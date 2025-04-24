let compRegister = `
<form action="">
    <h4 class="text-warning text-center pt-5">Регистрация</h4>
    <label>
        <input type="text" id="username" name="username" placeholder="ИМЯ" />
        <div class="line-box">
            <div class="line">
            </div>
        </div>
    </label>
    <label>
        <input type="password" id="password" name="password" placeholder="ПАРОЛЬ" />
        <input type="text" id="email" name="email" placeholder="EMAIL" />
        <div class="line-box">
            <div class="line"></div>
        </div>
    </label>
    <a href="#" id="btn_reg" class="button" type="submit">Зарегистрироваться</a>
</form>

`;

document.body.innerHTML += compRegister;