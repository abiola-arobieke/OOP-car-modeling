export class CarModel {
    constructor(title) {
        this.title = title
        this.cars = []
    }

    get car() {
        return cars
    }

    set car(vehicle) {
        this.cars = vehicle
    }

    add_car(vehicle) {
        this.cars.push(vehicle)
        vehicle.car_model = this
    }
}