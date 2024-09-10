import { CarModel } from "./car_modeling/car/model.js";
import { Car } from "./car_modeling/car/car.js";
import { GearBox } from "./car_modeling/gear/gear_box.js";
import { GearBoxType } from "./car_modeling/gear/gear_box_type.js"
import { Engine } from "./car_modeling/car/engine.js";
import { Suspension } from "./car_modeling/car/suspension.js";


let accord = new CarModel("accord")

let gear_box_type1 = new GearBoxType("Worm", "It's in a good condition")
let gear_box_type2 = new GearBoxType("Bevel", "It's in a good condition")

let gear_box = new GearBox(19.56, 3)

let vt2 = new Engine(10.7, 4)
let vt4 = new Engine(12.8, 6)

let susp1 = new Suspension(34.8)
let susp2 = new Suspension(30.7)
let susp3 = new Suspension(32.8)

let eod = new Car(2003, gear_box, vt2)
let baby_boy = new Car(1998, gear_box, vt4)

eod.addSuspension(susp1)
eod.addSuspension(susp2)

baby_boy.addSuspension(susp3)


gear_box.addGearBoxType(gear_box_type1)
gear_box.addGearBoxType(gear_box_type2)


accord.add_car(eod)
accord.add_car(baby_boy)

console.log('Suspension 1: ', susp1.car)

console.log(baby_boy)
console.log(eod)

// console.log('Gear Box Types: ', gear_box.types)
// console.log('Gear box of type: 1', gear_box_type1.gearBox)

