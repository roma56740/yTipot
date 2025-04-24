// Переменные 
let Protocol = window.location.protocol.toLowerCase() 
let Host = window.location.host.toLowerCase()
let PageName = (window.location.pathname === '/') ? 'Home' : window.location.pathname
let DeviceProtacol = (window.innerWidth > 1000) ? false : true
let IpDevice;
let CityUser;
let CountryUser;
let PlatformSiteFrom = GetPlatformOrNot();
let Main_Url_Host_Platform_Site = 'http://127.0.0.1:8000';
let RequsetViewsDocs = new XMLHttpRequest();
let CodeSessionTimeSiteName = 'CodeSessionTimeSiteName';
let codeSession;
// Переменные 
// Данные пользователя
function FindInfoUser() {
    // RequsetViewsDocs.open('get', 'https://ipapi.co/json')
    // RequsetViewsDocs.send()
    // RequsetViewsDocs.onload =  () => {
    //     let answer = JSON.parse(RequsetViewsDocs.responseText);
    //     CountryUser = answer.country_name.toLowerCase()
    //     CityUser = answer.city.toLowerCase()
    //     IpDevice = answer.ip.toLowerCase();
    //     console.log('Not has UserInfo');
    //     createLocalInfo(CountryUser, CityUser, IpDevice);
    //     SendServerFunc();
    // }
        createLocalInfo('Russia', 'Kazan', '127.0.0.1');
        SendServerFunc();
}
function createLocalInfo(CountryUserFuncData, CityUserFuncData, IpDeviceFuncData){
    localStorage.setItem('UserInfo', JSON.stringify({
        'CountryUser':CountryUserFuncData,
        'CityUser':CityUserFuncData,
        'IpDevice':IpDeviceFuncData,
    }))
}
function HasLocalUserInfo(){
    let localUserInfo = JSON.parse(localStorage.getItem('UserInfo'))
    CityUser = localUserInfo['CityUser']
    CountryUser = localUserInfo['CountryUser']
    IpDevice = localUserInfo['IpDevice']
    RequsetViewsDocs.open('get', 
        `${Main_Url_Host_Platform_Site}/api/viewSite?PageName=${PageName}&DeviceProtacol=${DeviceProtacol}&IpDevice=${IpDevice}&CityUser=${CityUser}&CountryUser=${CountryUser}&DomenSite=${Host}&PlatformSiteFrom=${PlatformSiteFrom}`)

    RequsetViewsDocs.send()
    RequsetViewsDocs.onload = () => {
        let answer = JSON.parse(RequsetViewsDocs.responseText);
        console.log('goodHasAnswerLocalUserInfo')
    }
};
if (localStorage.getItem('UserInfo')){
    HasLocalUserInfo();
    console.log('Yes, has localUserInfo')
}else{
    FindInfoUser(); 
}
// Данные пользователя
// Отправка данных на сервер
function SendServerFunc () {
    RequsetViewsDocs.open('get', 
        `${Main_Url_Host_Platform_Site}/api/viewSite?PageName=${PageName}&DeviceProtacol=${DeviceProtacol}&IpDevice=${IpDevice}&CityUser=${CityUser}&CountryUser=${CountryUser}&DomenSite=${Host}&PlatformSiteFrom=${PlatformSiteFrom}`)

    RequsetViewsDocs.send()
    RequsetViewsDocs.onload = () => {
        let answer = JSON.parse(RequsetViewsDocs.responseText);
        console.log('goodNotHasUserInfo')
    }
}
// Отправка данных на сервер  
// На какой платформе 
function GetPlatformOrNot() {
    const searchString = new URLSearchParams(window.location.search);
    
    if (searchString.get("platform")) {
        return searchString.get("platform")
    }else{
        return 'Браузер'
    }
}
// На какой платформе 
// Среднее время на сайте
let Month
let Year
let Day
let TimeStart = TimeStartCheck();
let NameCookieTime = 'TimeCookieAVG';
let NameLocalTime = 'TimeLocalSite'
function TimeStartCheck(){
    const date = new Date();
    let TimeStartGet = date.getTime();
    return TimeStartGet
}
function CheckTimeOnSite(){
    let AllCookies = {};
    const getCookieALL = document.cookie.split("; ");
    for(let i = 0; i < getCookieALL.length; i++){
        AllCookies[`${getCookieALL[i].split('=')[0]}`] = getCookieALL[i].split('=')[1];
    }
    if (AllCookies[`${NameCookieTime}`] &&  AllCookies[`${CodeSessionTimeSiteName}`] &&  AllCookies[`${CodeSessionTimeSiteName}`] != 'undefined' ){
        TimeStart = AllCookies[`${NameCookieTime}`]
        codeSession = AllCookies[`${CodeSessionTimeSiteName}`]
        PostTimeCookie(TimeStart, codeSession);
        AddTimeDB();
    }else{
        RequsetViewsDocs.open("get", `${Main_Url_Host_Platform_Site}/api/getSession?host=${Host}`)
        RequsetViewsDocs.send()
        RequsetViewsDocs.onload = () => {
            codeSession = JSON.parse(RequsetViewsDocs.responseText)['pk_Session'];
            console.log(codeSession)
            PostTimeCookie(TimeStart, codeSession)
            cookiesDataSite = CheckTimeOnSite();
        }
    }
    return [AllCookies[`${NameCookieTime}`], AllCookies[`${CodeSessionTimeSiteName}`]];
}
let cookiesDataSite = CheckTimeOnSite();
function PostTimeCookie(startTimeValue, codeSessionFunc){
    const date = new Date();
    date.setTime(date.getTime() + 60 * 1000);
    document.cookie = `${CodeSessionTimeSiteName}=${codeSessionFunc}; expires=${date.toUTCString()}; path=/;`
    document.cookie = `${NameCookieTime}=${startTimeValue}; expires=${date.toUTCString()}; path=/;`;
}
function AddTimeDB() {
    window.addEventListener('beforeunload', function(){
        
        const date = new Date();
        RequsetViewsDocs.open('get', `${Main_Url_Host_Platform_Site}/api/timeSite?pk=${codeSession}&time=${date.getTime() - TimeStart}`)
        RequsetViewsDocs.send()
    })
};
