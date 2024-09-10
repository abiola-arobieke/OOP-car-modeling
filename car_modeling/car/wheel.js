import { Tire } from "./tire.js";

export class Wheel extends Tire {
    constructor(diameter, width, air_pressure) {
        super(width, air_pressure)
        this.diameter = diameter
        this.suspension;
        this.brake;
    }
}