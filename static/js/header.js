let my_site = document.getElementById("my_site");
let mes_el_site = document.getElementById('mes_el_site');
// let username_data = (document.getElementById('username_data').innerHTML);
if(my_site){
    my_site.addEventListener('click', function(){
        let el_hidden = window.getComputedStyle(mes_el_site).width.slice(0,-2);
        if(!(Number(el_hidden))){
            mes_el_site.style.width = '180px'
            mes_el_site.style.height = '100px'
            mes_el_site.style.opacity = '1'
            return 1;
        }
        mes_el_site.style.width = '0px'
        mes_el_site.style.height = '0px'
        mes_el_site.style.opacity = '0'
        return 1;
    })
}
let add_site_button = document.getElementById('add_site_button');
if(add_site_button){
    add_site_button.addEventListener('click', ()=>{
        let add_block_site = document.getElementsByClassName('add_block_site')[0]
        add_block_site.style.display = 'flex'
    })
}

function site_loader(){
    let p_site = document.getElementsByClassName('p_site');
    for(let i=0; i<p_site.length; i++){
        p_site[i].addEventListener('click', ()=>{ 
            window.location.href = `ThisSite.html?idSite=${p_site[i].dataset.id}`;
            localStorage.setItem('ThisSite', p_site[i].innerHTML);
        })
    }
};
site_loader();

let PHPURL = 'https://ca27267.tw1.ru/addSite.php'
let url = window.location.protocol + '//' + window.location.host
let add_page_site = document.getElementById('add_page_site');
if(add_page_site){
    add_page_site.addEventListener('click', function(){
        let domen_input = document.getElementById('domen_input').value
        if (domen_input) {
            let req = new XMLHttpRequest();
            let reqDJj = new XMLHttpRequest();
            
            reqDJj.open('get', 'https://youtip.pythonanywhere.com' + '/api/add_site' + `?domen=${domen_input}&username_data=${localStorage.getItem('User_username')}`)
            reqDJj.send();

            req.open('get', PHPURL + `?domen=${domen_input}&username_data=${User_id}`)
            req.send()
            req.onload = () => {
                let status = JSON.parse(req.responseText)
                let username_site = status.username
                let site_el = status.status
                let site_list_block = document.getElementsByClassName('site_list')[0];
                site_list_block.innerHTML = ''
                for(let i=0; i< site_el.length; i++){
                    site_list_block.innerHTML += `<p data-id="${site_el[i].id}" class="p_site">${site_el[i].domen}</p>` 
                }
                document.getElementsByClassName('add_block_site')[0].style.display = 'none'
                site_loader();
            }
        }else{
            console.log('error')
        }
    });
}



function addEls(){
    let req = new XMLHttpRequest();
    req.open('get', PHPURL + `?username_data=${User_id}`)
    req.send()
    req.onload = () => {
            let status = JSON.parse(req.responseText)
            let username_site = status.username
            let site_el = status.status
            let site_list_block = document.getElementsByClassName('site_list')[0];
            site_list_block.innerHTML = ''
            for(let i=0; i< site_el.length; i++){
                site_list_block.innerHTML += `<p data-id="${site_el[i].id}" class="p_site">${site_el[i].domen}</p>` 
            }
            document.getElementsByClassName('add_block_site')[0].style.display = 'none'
            site_loader();
        }
}
addEls();


let openaddBlock_Header = 0
let elopenaddBlock_Header = document.getElementsByClassName('addBlock_Header')[0]
if(elopenaddBlock_Header){
    let elawdw = document.getElementsByClassName('btn_add')[0]
    if(elawdw){
        elawdw.addEventListener('click', function(){
            if(openaddBlock_Header){
                elopenaddBlock_Header.style.height = '0px'
                elopenaddBlock_Header.style.width = '0px'
                openaddBlock_Header = openaddBlock_Header - 1
            }else{
                elopenaddBlock_Header.style.height = '150px'
                elopenaddBlock_Header.style.width = '220px'
                openaddBlock_Header = openaddBlock_Header + 1
            }
    })
};
}