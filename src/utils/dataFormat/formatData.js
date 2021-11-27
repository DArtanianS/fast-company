
export  default class dataFormat {
    #dataNow
    #dataCreated
    #time = {}

    //Определение разности текущей и преденной даты
    create(data) {
        this.#dataNow = new Date()
        this.#dataCreated = new Date(Number(data))

        //Год
        const yearNow = this.#dataNow.getFullYear()
        const yearCrated = this.#dataCreated.getFullYear()
        let differenceYear = (yearNow - yearCrated) === 0
            ? 0
            : yearNow - yearCrated

        //Месяц
        const monthNow = this.#dataNow.getMonth()
        const monthCreated = this.#dataCreated.getMonth()
        let differenceMonth = differenceYear === 0
            ? monthNow - monthCreated
            : (12 - monthCreated + 1) + monthNow + 1

        //Дополнение к году по итогам пересчета месяцев
        if(differenceMonth > 12) {
            differenceMonth =  differenceMonth - 12
        } else {
            differenceYear = differenceYear > 0 ? differenceYear - 1 : 0
        }

        //День
        const dayNow = this.#dataNow.getDay()
        const dayCreated = this.#dataCreated.getDay()
        const dayInMonth = this.countDaysInMonth(yearCrated, monthCreated)
        let  differenceDay = differenceYear === 0 && differenceMonth === 0
            ? dayNow - dayCreated
            : dayNow + dayInMonth - dayCreated

        if(differenceDay > dayInMonth) {
            differenceDay = differenceDay - dayInMonth
        } else {
            differenceMonth = differenceMonth > 0 ? differenceMonth - 1 : 0
        }

        //Час
        let difference = 0
        let time = {}
        if(differenceYear === 0 && differenceMonth === 0 && differenceDay === 0) {
            difference = this.#dataNow - this.#dataCreated
            time = {...this.timeDays(difference)}
        } else {
            const tempDate = new Date(
                this.#dataNow.getFullYear(),
                this.#dataNow.getMonth(),
                this.#dataNow.getDate() - 1,
                this.#dataCreated.getHours(),
                this.#dataCreated.getMinutes(),
                this.#dataCreated.getSeconds()
            )
            difference = this.#dataNow - tempDate
            time = {...this.timeDays(difference)}
        }

        this.#time = { ...time,
            year: differenceYear ,
            month: differenceMonth,
            days: differenceDay,
        }
    }

    get differenceTime() {
        return this.#time
    }

    get dataCreated() {
        return this.#dataCreated
    }

    //Вывод данных объекта time в виде строки
    ren() {
        return ` year: ${this.#time.year} 
            month: ${this.#time.month} 
            days: ${this.#time.days} 
            hours: ${this.#time.hours} 
            minutes: ${this.#time.minutes} 
            seconds: ${this.#time.seconds}`
    }

    //Функция определения количиства дней в месяце
    countDaysInMonth(year, month) {
        const date = new Date(year, month + 1, 0)
        return date.getDate()
    }

    //Функция расчета рвзности в часах, минутах, секундах
    timeDays(difference) {
        const koef = 1000 * 3600 * 24
        const days = Math.floor(difference / koef)
        let time = difference - days * koef
        const hours = Math.floor(time / (1000 * 3600))
        time = time - hours * 1000 * 3600//difference - days * koef
        const minutes = Math.floor(time / (1000 * 60))
        time = time - minutes * 1000 * 60
        const seconds = Math.floor(time / 1000)

        return {hours: hours, minutes: minutes, seconds: seconds}
    }
}