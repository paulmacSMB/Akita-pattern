import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CarStore } from "./car.store";
import { Car } from "./car.model";

@Injectable({ providedIn: 'root' })
export class CarService {
    constructor(private carStore: CarStore, private http: HttpClient){}

    getCars() {
        return this.http.get<Car[]>("https://localhost:5266/api/cars").subscribe(cars => {
            this.carStore.set(cars);
        });
    }
}