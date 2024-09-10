import { CarModel } from "./car_modeling/car/model.js";
import { Car } from "./car_modeling/car/car.js";
import { GearBox } from "./car_modeling/gear/gear_box.js";
import { GearBoxType } from "./car_modeling/gear/gear_box_type.js"

let accord = new CarModel("accord")
let eod = new Car(2003, 19.3, 4)
let baby_boy = new Car(1998, 546.78, 1)

accord.add_car(eod)
accord.add_car(baby_boy)

let gear_box_type1 = new GearBoxType("Worm", "It's in a good condition")
let gear_box_type2 = new GearBoxType("Bevel", "It's in a good condition")

let gear_box = new GearBox(19.56, 3)

gear_box.addGearBoxType(gear_box_type1)
gear_box.addGearBoxType(gear_box_type2)


console.log('Gear Box Types: ', gear_box.types)
console.log('Gear box of type: 1', gear_box_type1.gearBox)

