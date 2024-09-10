export class GearBox {
    constructor(gearRatio, currentGear) {
        this.gearRatio = gearRatio
        this.currentGear = currentGear
        this.types = []
    }

    get gearBoxType() {
        return this.types
    }

    set gearBoxType(gearBoxType) {
        this.types = gearBoxType
    }

    addGearBoxType(type) {
        this.types.push(type)
        type.gearBox = this
    }

    shiftUp() {
        if (1 > this.currentGear < 5) {
            this.currentGear += 1
            return `You are driving with gear: ${this.currentGear}`
        }
    }

    shiftDown() {
        if (1 > this.currentGear < 5) {
            this.currentGear -= 1
            return `You are driving with gear: ${this.currentGear}`
        }
    }
}