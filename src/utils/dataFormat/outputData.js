import FormatData from './formatData'

export default class OutputData extends FormatData {
    output(dataCreated) {
        this.create(dataCreated)
        const data = this.dataCreated
        const time = this.differenceTime
        if(time.year !== 0) {
            return `${data.getDate()}.${data.getMonth() + 1}.${data.getFullYear()}`
        }
        if(time.days !== 0) {
            return `${data.getDate()}.${data.getMonth() + 1}`
        }
        if(time.hours !== 0 || time.minutes >= 30) {
            return `${data.getHours()}:${data.getMinutes() + 1}`
        }
        if(time.minutes >= 10 && time.minutes < 30) {
            return '30 минут назад'
        }
        if(time.minutes >= 5 && time.minutes < 10) {
            return '10 минут назад'
        }
        if(time.minutes >= 1 && time.minutes < 5) {
            return '5 минут назад'
        }
        if(time.seconds >= 0 && time.minutes < 1) {
            return '1 минута назад'
        }
    }
}