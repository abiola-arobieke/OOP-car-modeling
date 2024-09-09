import {CarModel} from "./car_modeling/car_model/car_model.js";
import { Car } from "./car_modeling/car_model/car.js";

let accord = new CarModel("accord")
let eod = new Car(2003)
let baby_boy = new Car(1998)

accord.add_car(eod)
accord.add_car(baby_boy)


console.log(accord.cars)
