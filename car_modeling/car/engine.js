export class Engine {
    constructor(capacity, noOfCylinder) {
        this.capacity = capacity
        this.noOfCylinder = noOfCylinder
    }

    start() {
        if (this.capacity > 0 && this.noOfCylinder > 0) {
            return "Engine starts"
        } else {
            return "Unable to start engine"
        }
    }

    decelerate() {
        return "Speed is reducing"
    }

    accelerator() {
        return "Increasing speed"
    }
}