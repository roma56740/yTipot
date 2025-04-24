let compThisSite = `

<div id="idSIte" style="display: none;">0</div>  
    
<p class="Abount_main_text_Site"><b>Main</b>: Сейчас на сайте около:  <span>200 </span> человек, Уникальных пользователей: <span>1200</span>.</p>


<div class="block_diogram_main_El">
    <h2>Просмотры</h2>
    <div class="div_btn_prosmotr">
        <p class="btns_view_HowMuch" style="background-color: var(--acent_color);">День</p>
        <p class="btns_view_HowMuch">Месяц</p>
        <p class="btns_view_HowMuch">Год</p>
    </div>
    <div class="canvas_con" id="canvas_con">
        <canvas class="block_views_tabels" id="block_views_tabels">

        </canvas>
    </div>
</div>


<div class="block_diogram_main_El pl_block_diogram_main_El">
    <h2>Переходы с платформ</h2>
    <div class="canvas_con" id="canvas_con_platf">
        <canvas class="block_views_tabels_pl" id="block_views_tabels_pl">

        </canvas>
    </div>
</div>


<div class="block_diogram_main_El">
    <h2>Местоположение</h2>
    <div class="div_btn_prosmotr">
        <p class="btns_view_HowMuchCountry" style="background-color: var(--acent_color);">Город</p>
        <p class="btns_view_HowMuchCountry">Страна</p>
    </div>
    <div class="canvas_con" id="canvas_con_place">
        <canvas class="block_views_tabels_plcace" id="block_views_tabels_pace">

        </canvas>
    </div>
</div>

<div class="block_diogram_main_El">
    <h2>Устройства</h2> 
    <div class="canvas_con" id="canvas_con_Desck">
        <canvas class="block_views_tabels_Desck" id="block_views_tabels_Desck">

        </canvas>
    </div>
</div>



<div class="block_diogram_main_El">
    <h2>Среднее время</h2>
    <div class="div_btn_prosmotr">
        <p class="BlockBtnTimeAVG" style="background-color: var(--acent_color);">День</p>
        <p class="BlockBtnTimeAVG">Месяц</p>
        <p class="BlockBtnTimeAVG">Год</p>
    </div>
    <div class="canvas_con" id="canvas_conAVGTime">
        <canvas class="block_views_tabelsTimeAVG" id="block_views_tabelsTimeAVG">
            
        </canvas>
    </div>
</div>



<div class="block_diogram_main_El">
    <h2>Страницы</h2>
    <div class="div_btn_prosmotr">
        <p class="btns_Pages_HowMuch" style="background-color: var(--acent_color);">День</p>
        <p class="btns_Pages_HowMuch">Месяц</p>
        <p class="btns_Pages_HowMuch">Год</p>
    </div>
    <div class="canvas_con" id="canvas_conPage">
        <canvas class="block_views_tabelsPage" id="block_views_tabelsPage">

        </canvas>
    </div>
</div>
`;

document.body.innerHTML += compThisSite;