class GetMonthDay {
    constructor(year,month){
        this.date = new Date();
        this.year = year || this.date.getFullYear();
        this.month = month || this.date.getMonth() + 1;

    }

    /**
     * @method getFirstDayWeekDay  返回月份第一天的星期数
     * @return {number}
     */
    getFirstDayWeekDay (){
        return new Date(this.year,this.month - 1,1).getDay();
    }

    /**
     * @method  getLastDay 返回月份最后一天的日期
     * @return {number}
     */
    getLastDay (){
        return new Date(this.year,this.month,0).getDate();

    }

    /**
     * @method getLastDayWeekDay  返回月份最后一天的星期数
     * @return {number}
     */
    getLastDayWeekDay (){
        return new Date(this.year,this.month,0).getDay();

    }

    /**
     * @method  getLastDayOfPreMonth 返回上一月份最后一天的日期
     * @return {number}
     */
    getLastDayOfPreMonth (){
        /* 当前月的第 0 天就是上个月的最后一天 */
        return new Date(this.year,this.month - 1,0).getDate();


    }

    /**
     * @method getLayout 日期处理逻辑
     * @return {Array}
     */
    getLayout (){
        let ret = [];
        /* 6行7列  */
        for(let i = 0;i < 6 * 7;i++){
            /* i+1为月份的第一天 */
            let date = i + 1 - this.getFirstDayWeekDay(),
                thatMonth = this.month,
                thatDate = date;
            /* 上一月份 */
            if(date <= 0){
                thatMonth = this.month - 1;
                thatDate = this.getLastDayOfPreMonth() + thatDate;
            } /* 下一月份 */
            else if(date > this.getLastDay()){
                thatMonth = this.month + 1;
                thatDate = thatDate - this.getLastDay();

            }

            if(thatMonth === 0){
                thatMonth = 12;
            }
            if(thatMonth === 13){
                thatMonth = 1;
            }
            ret.push({
                month:thatMonth,
                date,
                thatDate
            });

        }
        return {
            ret,
            year:this.year,
            month:this.month
        };

    }

}
