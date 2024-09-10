import { GearBox } from "../gear/gear_box.js";

export class Car extends GearBox {
    constructor(year, gearRatio, currentGear) {
        super(gearRatio, currentGear)
        this.chasisNumber = Math.floor(Math.random() * 1000) + 1;
        this.year = year
        this.model;
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
}