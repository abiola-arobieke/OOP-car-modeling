export class Brake {
    constructor(brakeType, car, wheel) {
        this.brakeType = brakeType
        this.car = car
        this.wheel = wheel

        car.brake = this
        wheel.brake = this
    }

    apply() {
        return this.car.engine.decelerate()
    }
}