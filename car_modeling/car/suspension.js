export class Suspension{
    constructor(springRate, wheel){
        this.springRate = springRate
        this.wheel = wheel;
        this.cars;
    }

    get car(){
        return this.cars
    }

    set car(car){
        this.cars = car
        if(!car.suspensions.includes(this)){
            car.suspensions.push(this)
        }
    }
}