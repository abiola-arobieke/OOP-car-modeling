export class Car {
    constructor(year, gearBox, engine, body) {
        this.chasisNumber = Math.floor(Math.random() * 1000) + 1;
        this.year = year
        this.gearBox = gearBox
        this.engine = engine
        this.body = body
        this.model;
        this.suspensions = []
        this.brake;
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

    addSuspension(suspension) {
        this.suspensions.push(suspension)
        suspension.car = this
    }

    startEngine() {
        return this.engine.start()
    }

    applyBrake() {
        return this.brake.apply()
    }

    shiftUpGear() {
        return this.gearBox.shiftUp()
    }

    shiftDownGear() {
        return this.gearBox.shiftDown()
    }
}