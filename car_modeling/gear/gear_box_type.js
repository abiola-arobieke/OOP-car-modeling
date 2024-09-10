export class GearBoxType {
    constructor(name, remarks){
        this.name = name
        this.remarks = remarks
        this.gearBoxes;
    }

    get gearBox(){
        return this.gearBoxes
    }

    set gearBox(gearBox){
        this.gearBoxes = gearBox
        if(!gearBox.types.includes(this)){
            gearBox.types.push(this)
        }
    }
}