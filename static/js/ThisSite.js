// Получаем текущий URL
const params = new URLSearchParams(window.location.search);
// Забираем параметр idSite
const idSiteParams = params.get("idSite");
 // Выведет 6, если ?idSite=6


let btns_view_HowMuch = document.getElementsByClassName('btns_view_HowMuch');
for(let i = 0; i < btns_view_HowMuch.length; i++) {
    btns_view_HowMuch[i].addEventListener('click', function () {
        for(let i = 0; i < btns_view_HowMuch.length; i++) {
            btns_view_HowMuch[i].style.backgroundColor = "var(--bg_color_firs)"}
        this.style.backgroundColor = "var(--acent_color)"
        let innerTextWord = this.innerHTML;
        if(innerTextWord === 'День'){CreateDayMounfYears('Day');}
        else if(innerTextWord === 'Месяц'){CreateDayMounfYears('Mount');}
        else if(innerTextWord === 'Год'){CreateDayMounfYears('Year');}
    })
};


// let idSIte = (document.getElementById('idSIte').innerHTML) ? document.getElementById('idSIte').innerHTML : params.get("idSite");
let idSIte = (Number(idSiteParams) == 5 || Number(idSiteParams) == 6)? Number(idSiteParams) + 12 : Number(idSiteParams) + 13;
let RequestSiteGetData = new XMLHttpRequest();
let RequestPlatform = new XMLHttpRequest();
let RequestPlace = new XMLHttpRequest();
let RequestGetDevice = new XMLHttpRequest();
let RequestGetTimeAVG = new XMLHttpRequest();
let RequestGetPage = new XMLHttpRequest();
let DateData = new Date();
let ArrDataAll = {};
let ToDayDate;
let Main_HostMy = 'https://youtip.pythonanywhere.com';
// Дни, Месяца, Года
function getDaysTable() {
    let answerFunc = {}
    RequestSiteGetData.open('get', `${Main_HostMy}/api/getAllData?pk=${idSIte}&find=Day`)
    RequestSiteGetData.send()
    RequestSiteGetData.onload = () => {
        let answerServer = JSON.parse(RequestSiteGetData.responseText)
        answerFunc['time'] = answerServer['Views']
        answerFunc['data'] = answerServer['Count']
        CreateTables(answerFunc)
        console.log(6)
        return answerFunc
    }
}
function getMountsTable() {
    let answerFunc = {}
    RequestSiteGetData.open('get', `${Main_HostMy}/api/getAllData?pk=${idSIte}&find=Mount`)
    RequestSiteGetData.send()
    RequestSiteGetData.onload = () => {
        let answerServer = JSON.parse(RequestSiteGetData.responseText)
        answerFunc['time'] = answerServer['Views']
        answerFunc['data'] = answerServer['Count']
        CreateTables(answerFunc)
        return answerFunc
    }
}
function getYearsTable() {
    let answerFunc = {}
    RequestSiteGetData.open('get', `${Main_HostMy}/api/getAllData?pk=${idSIte}&find=Year`)
    RequestSiteGetData.send()
    RequestSiteGetData.onload = () => {
        let answerServer = JSON.parse(RequestSiteGetData.responseText)
        answerFunc['time'] = answerServer['Views']
        answerFunc['data'] = answerServer['Count']
        CreateTables(answerFunc)
        return answerFunc
    }
}
// Дни, Месяца, Года
// Главный вызов
function CreateDayMounfYears (Interval) {
    if(Interval === 'Day'){
        getDaysTable();
    }
    else if(Interval === 'Mount'){
        getMountsTable();
    }
    else if(Interval === 'Year'){
        getYearsTable();
    }

};
// Главный вызов
// Создание таблицы дней
function CreateTables(DataTableIs){
    let canvas_con = document.getElementById('canvas_con');
    canvas_con.innerHTML = '<canvas class="block_views_tabels" id="block_views_tabels"></canvas>'

    let ctx = document.getElementById('block_views_tabels');

    Chart.defaults.color = '#FFCEA8';
    new Chart(ctx, {
    type: 'bar',
    data: {
        labels: DataTableIs['time'],
        datasets: [{
        label: 'Просмотры',
        data: DataTableIs['data'],
        borderWidth: 1,
        borderColor: '#FFCEA8',
        backgroundColor: '#DDA972',
        }],

    },
    options: {
        scales: {
        x: {
            beginAtZero: true,
            backgroundColor: '#B88B46'
        }
        }
    }
    });
}
// Создание таблицы дней
// Создание таблицы платформ
function CreateTablesPlatform(DataTableIs){
    let canvas_con = document.getElementById('canvas_con_platf');
    canvas_con.innerHTML = '<canvas class="block_views_tabels_pl" id="block_views_tabels_pl"></canvas>'

    let ctx = document.getElementById('block_views_tabels_pl');

    Chart.defaults.color = '#FFCEA8';
    new Chart(ctx, {
    type: 'line',
    data: {
        labels: DataTableIs['labels'],
        datasets: [{
        label: 'Платформы',
        data: DataTableIs['data'],
        borderWidth: 1,
        borderColor: '#FFCEA8',
        backgroundColor: '#DDA972',
        fill:true,
        }],
    },
    options: {
        scales: {
        x: {
            beginAtZero: true,
            backgroundColor: '#B88B46'
        }
        }
    }
    });
}
// Создание таблицы платформ
function CheckPlatform () {
    let answerFunc = {}
    RequestPlatform.open('get', `${Main_HostMy}/api/getPlatform?pk=${idSIte}`)
    RequestPlatform.send()
    RequestPlatform.onload = () => {
        let answerServer = JSON.parse(RequestPlatform.responseText)
        answerFunc['labels'] = answerServer['platforms']
        answerFunc['data'] = answerServer['count']
        CreateTablesPlatform(answerFunc);
        console.log(7)
        return answerFunc
    }
};
// Платформы
let btns_view_HowMuchCountry = document.getElementsByClassName('btns_view_HowMuchCountry')
for(let i = 0; i < btns_view_HowMuchCountry.length; i++){
    btns_view_HowMuchCountry[i].addEventListener('click', function(){
        for(let i = 0; i < btns_view_HowMuchCountry.length; i++){
            btns_view_HowMuchCountry[i].style.backgroundColor = "var(--bg_color_firs)"
        }
        this.style.backgroundColor = "var(--acent_color)"
        if(this.innerHTML === 'Город'){TablesCity();}
        else if(this.innerHTML === 'Страна'){TablesCountry();};
        // else if(){};

    })
}
function TablesCountry(){
    let answerFunc = {}
    RequestPlace.open('get', `${Main_HostMy}/api/getCityCountry?pk=${idSIte}&find=Country`)
    RequestPlace.send()
    RequestPlace.onload = () => {
        let answerServer = JSON.parse(RequestPlace.responseText)
        answerServer['labels'] = answerServer['place']
        answerServer['data'] = answerServer['count']
        CreateTablesPlace(answerServer)
        return answerFunc
    }
}
function TablesCity(){
    let answerFunc = {}
    RequestPlace.open('get', `${Main_HostMy}/api/getCityCountry?pk=${idSIte}&find=City`)
    RequestPlace.send()
    RequestPlace.onload = () => {
        let answerServer = JSON.parse(RequestPlace.responseText)
        answerServer['labels'] = answerServer['place']
        answerServer['data'] = answerServer['count']
        CreateTablesPlace(answerServer)
        console.log(5)
        return answerFunc
    }
};
function CreateTablesPlace(DataTableIs){
    let canvas_con = document.getElementById('canvas_con_place');
    canvas_con.innerHTML = '<canvas class="block_views_tabels_plcace" id="block_views_tabels_pace"></canvas>'

    let ctx = document.getElementById('block_views_tabels_pace');

    Chart.defaults.color = '#FFCEA8';
    new Chart(ctx, {
    type: 'line',
    data: {
        labels: DataTableIs['labels'],
        datasets: [{
        label: 'Место просмотра',
        data: DataTableIs['data'],
        borderWidth: 1,
        borderColor: '#FFCEA8',
        backgroundColor: '#DDA972',
        fill:true,
        }],

    },
    options: {
        scales: {
        x: {
            beginAtZero: true,
            backgroundColor: '#B88B46'
        }
        }
    }
    });
}
function GetDeviceFunc(){
    let answerFunc = {}
    RequestGetDevice.open('get', `${Main_HostMy}/api/getDevice?pk=${idSIte}`)
    RequestGetDevice.send()
    RequestGetDevice.onload = () => {
        let answerServer = JSON.parse(RequestGetDevice.responseText)
        answerServer['labels'] = answerServer['place']
        answerServer['data'] = answerServer['count']
        CreateDevice(answerServer);
        console.log(4)
        return answerFunc
    }
};
function CreateDevice(DataTableIs) {
    let canvas_con = document.getElementById('canvas_con_Desck');
    canvas_con.innerHTML = '<canvas class="block_views_tabels_Desck" id="block_views_tabels_Desck"></canvas>'

    let ctx = document.getElementById('block_views_tabels_Desck');

    Chart.defaults.color = '#FFCEA8';
    new Chart(ctx, {
    type: 'bar',
    data: {
        labels: DataTableIs['labels'],
        datasets: [{
        label: 'Устройство',
        data: DataTableIs['data'],
        borderWidth: 1,
        borderColor: '#FFCEA8',
        backgroundColor: '#DDA972',
        }],

    },
    options: {
        scales: {
        x: {
            beginAtZero: true,
            backgroundColor: '#B88B46'
        }
        }
    }
    });
}
let BlockBtnTimeAVG = document.getElementsByClassName('BlockBtnTimeAVG');
for(let i = 0; i < BlockBtnTimeAVG.length; i++) {
    BlockBtnTimeAVG[i].addEventListener('click', function () {
        for(let i = 0; i < BlockBtnTimeAVG.length; i++) {
            BlockBtnTimeAVG[i].style.backgroundColor = "var(--bg_color_firs)"}
        this.style.backgroundColor = "var(--acent_color)"
        let innerTextWord = this.innerHTML;
        if(innerTextWord === 'День'){CheackDataTimeSVG('Day')}
        else if(innerTextWord === 'Месяц'){CheackDataTimeSVG('Mon')}
        else if(innerTextWord === 'Год'){CheackDataTimeSVG('Year')}

    })
};
function CheackDataTimeSVG(interval) {
    RequestGetTimeAVG.open('get', `${Main_HostMy}/api/getTimeAVG?pk=${idSIte}&intarval=${interval}`)
    RequestGetTimeAVG.send()
    RequestGetTimeAVG.onload = () => {
        let answer = JSON.parse(RequestGetTimeAVG.responseText)
        let res = {
            'labels':['Секунд'],
            'data': answer['data']
        }
        CreateTimeAVG(res)
        console.log(3)
    }
}
function CreateTimeAVG(DataTableIs) {
    let canvas_con = document.getElementById('canvas_conAVGTime');
    canvas_con.innerHTML = '<canvas class="block_views_tabelsTimeAVG" id="block_views_tabelsTimeAVG"></canvas>'

    let ctx = document.getElementById('block_views_tabelsTimeAVG');

    Chart.defaults.color = '#FFCEA8';
    new Chart(ctx, {
    type: 'bar',
    data: {
        labels: DataTableIs['labels'],
        datasets: [{
        label: 'Среднее время',
        data: DataTableIs['data'],
        borderWidth: 1,
        borderColor: '#FFCEA8',
        backgroundColor: '#DDA972',
        }],

    },
    options: {
        scales: {
        x: {
            beginAtZero: true,
            backgroundColor: '#B88B46'
        }
        }
    }
    });
}
let btns_Pages_HowMuch = document.getElementsByClassName('btns_Pages_HowMuch');
for(let i = 0; i < btns_Pages_HowMuch.length; i++) {
    btns_Pages_HowMuch[i].addEventListener('click', function () {
        for(let i = 0; i < btns_Pages_HowMuch.length; i++) {
            btns_Pages_HowMuch[i].style.backgroundColor = "var(--bg_color_firs)"}
        this.style.backgroundColor = "var(--acent_color)"
        let innerTextWord = this.innerHTML;
        if(innerTextWord === 'День'){createTablePress('Day')}
        else if(innerTextWord === 'Месяц'){createTablePress('Mon')}
        else if(innerTextWord === 'Год'){createTablePress('Year')}

    })
};
function createTablePress(interval){
    RequestGetPage.open('get', `${Main_HostMy}/api/getPageSite?pk=${idSIte}&intarval=${interval}`)
    RequestGetPage.send()
    RequestGetPage.onload = () => {
        let answer = JSON.parse(RequestGetPage.responseText)
        let res = {
            'labels':answer['data'],
            'data': answer['count']
        }
        CreateTablesPage(res)
        console.log(2)
    }
}
function CreateTablesPage(DataTableIs){
    let canvas_con = document.getElementById('canvas_conPage');
    canvas_con.innerHTML = '<canvas class="block_views_tabelsPage" id="block_views_tabelsPage"></canvas>'

    let ctx = document.getElementById('block_views_tabelsPage');

    Chart.defaults.color = '#FFCEA8';
    new Chart(ctx, {
    type: 'line',
    data: {
        labels: DataTableIs['labels'],
        datasets: [{
        label: 'Место просмотра',
        data: DataTableIs['data'],
        borderWidth: 1,
        borderColor: '#FFCEA8',
        backgroundColor: '#DDA972',
        fill:true,
        }],
    },
    options: {
        scales: {
        x: {
            beginAtZero: true,
            backgroundColor: '#B88B46'
        }
        }
    }
    });
}
function getInfoUserSiteAbount(){
    let Abount_main_text_Site = document.getElementsByClassName('Abount_main_text_Site')[0];
    let ReqSiteAbout = new XMLHttpRequest();
    ReqSiteAbout.open('get', `${Main_HostMy}/api/AboutnSite?pk=${idSIte}`)
    ReqSiteAbout.send()
    ReqSiteAbout.onload = () => {
        let answer = JSON.parse(ReqSiteAbout.responseText);
        Abount_main_text_Site.innerHTML = `<p class="Abount_main_text_Site"><b>${localStorage.getItem('ThisSite')}</b>: Сейчас на сайте около:  <span>${answer['countNowUserInSite']} </span> человек, Уникальных пользователей: <span>${answer['countUserUniq']}</span>.</p>`
        console.log(1)
    }
}

// Создание страниц автоматически
getInfoUserSiteAbount();
createTablePress('Day');
CheackDataTimeSVG("Day");
GetDeviceFunc();
TablesCity();
getDaysTable();
CheckPlatform();