export class Suspension{
    constructor(springRate){
        this.springRate = springRate
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