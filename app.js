import { CarModel } from "./car_modeling/car/model.js";
import { Car } from "./car_modeling/car/car.js";
import { GearBox } from "./car_modeling/gear/gear_box.js";
import { GearBoxType } from "./car_modeling/gear/gear_box_type.js"
import { Engine } from "./car_modeling/car/engine.js";
import { Suspension } from "./car_modeling/car/suspension.js";
import { Body } from "./car_modeling/car/body.js";
import { Wheel } from "./car_modeling/car/wheel.js";
import { Brake } from "./car_modeling/car/brake.js";


let accord = new CarModel("accord")

let gear_box_type1 = new GearBoxType("Worm", "It's in a good condition")
let gear_box_type2 = new GearBoxType("Bevel", "It's in a good condition")

let gear_box = new GearBox(19.56, 3)

let vt2 = new Engine(10.7, 4)
let vt4 = new Engine(12.8, 6)

let wheel1 = new Wheel(5.2, 3.5, 40)
let wheel2 = new Wheel(5.2, 3.0, 45)

let susp1 = new Suspension(34.8, wheel1)
let susp2 = new Suspension(30.7, wheel2)
let susp3 = new Suspension(32.8, wheel1)

let crossTour = new Body(4)
let sport = new Body(2)

let eod = new Car(2003, gear_box, vt2, crossTour)
let baby_boy = new Car(1998, gear_box, vt4, sport)

let brake1 = new Brake('drum', eod, wheel1)
let brake2 = new Brake('disc', baby_boy, wheel2)

eod.addSuspension(susp1)
eod.addSuspension(susp2)

baby_boy.addSuspension(susp3)


gear_box.addGearBoxType(gear_box_type1)
gear_box.addGearBoxType(gear_box_type2)


accord.add_car(eod)
accord.add_car(baby_boy)

console.log(eod.startEngine())
console.log(eod.applyBrake())
console.log(eod.shiftUpGear())
console.log(eod.shiftDownGear())


// console.log(brake1)
// console.log(brake2)


// console.log(baby_boy)
// console.log(eod)

// console.log('Suspension 1: ', susp1.car)
// console.log('Gear Box Types: ', gear_box.types)
// console.log('Gear box of type: 1', gear_box_type1.gearBox)

