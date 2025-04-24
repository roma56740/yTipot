let sliderElement = document.getElementsByClassName('sliderElement')
let slidersIndex = {
    3:-150,
    0:50,
    1:150,
    2:250
};
let indexAr = 0;


setInterval(()=>{
    
    if(indexAr == 0){
        slidersIndex = {
            3:-150,
            0:50,
            1:150,
            2:250
        };indexAr = indexAr + 1;
    }else if(indexAr == 1){
        slidersIndex = {
            3:50,
            0:150,
            1:250,
            2:-150
        };indexAr = indexAr + 1;
    }else if(indexAr == 2){
        slidersIndex = {
            3:150,
            0:250,
            1:-150,
            2:50
        };indexAr = indexAr + 1;
    }else if(indexAr == 3){
        slidersIndex = {
            3:250,
            0:-150,
            1:50,
            2:150
        };indexAr = 0;
    }

    for(let i = 0; i < sliderElement.length; i++){
        sliderElement[i].style.left = `${slidersIndex[i]}%`;
    };
}, 2000)


console.log(window.location.host.toLowerCase())