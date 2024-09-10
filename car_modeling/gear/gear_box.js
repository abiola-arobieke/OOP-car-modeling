export class GearBox {
    constructor(gearRatio, currentGear){
        this.gearRatio = gearRatio
        this.currentGear = currentGear
        this.types = []
    }

    get gearBoxType(){
        return this.types
    }

    set gearBoxType(gearBoxType){
        this.types = gearBoxType
    }

    addGearBoxType(type){
        this.types.push(type)
        type.gearBox = this
    }
}