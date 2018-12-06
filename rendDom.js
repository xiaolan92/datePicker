const currentDay = new Date().getDate(),
    currentMonth = new Date().getMonth() + 1,
    currentYear = new Date().getFullYear();

let localMonth = currentMonth,
    localYear = currentYear;
class Renddom extends GetMonthDay{
    constructor(el,year = currentYear,month = currentMonth){
        super(year,month);
        this.month = month;
        this.year = year;
        this.el = document.querySelector(el);
        this.date = super.getLayout();
        this.appendDom();

    }

    /**
     * @method staticDom 静态dom处理
     * @return {string}
     */
    staticDom (){
        return `<header class="datePicker_header">
    <div class="nav_left">&lt;</div>
    <div class="current_month">${this.date.year}年${this.date.month}月</div>
<div class="nav_right">&gt;</div>
    </header>
    <nav class="datePicker_nav">
    <span>日</span>
    <span>一</span>
    <span>二</span>
    <span>三</span>
    <span>四</span>
    <span>五</span>
    <span>六</span>
    </nav>`;

    }

    /**
     * @method computedDom 动态dom处理及相关className添加
     * @param date
     * @return {string}
     */
    computedDom (date){
        let html = "";
        for(let i = 0;i < date.length;i++){
            if(date[i].month === this.month){
                if(date[i].thatDate === currentDay && currentMonth === this.month && currentYear === this.year){
                    html += `<span class="current_month_light current_day_light">${date[i].thatDate}</span>`;
                }else{
                    html += `<span class="current_month_light">${date[i].thatDate}</span>`;
                }

            }else{
                html += `<span>${date[i].thatDate}</span>`;
            }


        }
        return `<div class="datePicker_body">${html}</div>`;

    }
    appendDom (){
        this.el.innerHTML = this.staticDom() + this.computedDom(this.date.ret);
    }

    addEvent (){
        this.el.addEventListener("click",function (event){
            let target = event.target;
            if(target && target.classList.contains("nav_left")){
                localMonth -= 1;
                if(localMonth === 0){
                    localMonth = 12;
                    localYear -= 1;
                }
                new Renddom(".datePicker",localYear,localMonth);
            }
            if(target && target.classList.contains("nav_right")){
                localMonth += 1;
                if(localMonth === 13){
                    localMonth = 1;
                    localYear += 1;
                }
                new Renddom(".datePicker",localYear,localMonth);

            }

        },false);

    }

}

