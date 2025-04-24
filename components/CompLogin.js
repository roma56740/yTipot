let compLogin = `
<form method="post">
        <h4>Вход</h4>
        <label>
            <input type="text" id="username" name="username" placeholder="ИМЯ" />
            <div class="line-box">
                <div class="line">
                </div>
            </div>
        </label>
        <label>
            <input type="password" id="password" name="password" placeholder="ПАРОЛЬ" />
            <input type="text" id="email" name="EMAIL" placeholder="EMAIL" />
        <button type="button" id='btn_reg'>Войти</button> 
    </form>
`;

document.body.innerHTML += compLogin;