/* eslint-disable */
class Renddom extends GetMonthDay{
    constructor(el,year,month){
        super(year,month);
        this.el = document.querySelector(el);
        this.date = super.getLayout();

    }
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
    computedDom (date){
        let html = "";
        for(let i = 0;i < date.length;i++){
            html += `<span>${date[i].thatDate}</span>`;

        }
        return `<div class="datePicker_body">${html}</div>`;

    }
    appendDom (){
        this.el.innerHTML = this.staticDom() + this.computedDom(this.date.ret);
    }

}

new Renddom(".datePicker",2018,11).appendDom();
