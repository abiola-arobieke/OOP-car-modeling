export class Car {
    constructor(year, gearBox, engine) {
        this.chasisNumber = Math.floor(Math.random() * 1000) + 1;
        this.year = year
        this.gearBox = gearBox
        this.engine = engine
        this.model;
        this.suspensions = []
    }

    get car_model() {
        return this.model
    }

    set car_model(model) {
        this.model = model
        if (!this.model.cars.includes(this)) {
            this.model.cars.push(this)
        }
    }

    addSuspension(suspension){
        this.suspensions.push(suspension)
        suspension.car = this
    }
}