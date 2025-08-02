import { QueryEntity } from "@datorama/akita";
import { Car } from "./car.model";
import { CarStore , CarState} from "./car.store";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class CarQuery extends QueryEntity<CarState, Car> {
    constructor(store: CarStore) {
        super(store);
    }

    selectCars$ = this.selectAll();
}