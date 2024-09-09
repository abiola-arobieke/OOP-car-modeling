export class Car {
    constructor(year){
        this.chasis_number = Math.floor(Math.random() * 1000) + 1;
        this.year = year
        this.model;
    }

    get car_model(){
        return this.model
    }

    set car_model(model){
        this.model = model
        if(!this.model.cars.includes(this)){
            this.model.cars.push(this)
        }
    }
}