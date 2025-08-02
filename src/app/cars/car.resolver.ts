import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { CarService } from './car.service';

@Injectable({ providedIn: 'root' })
export class CarResolver implements Resolve<boolean> {
    constructor(private carService: CarService) {}
    resolve() {
        this.carService.getCars();
        return true;
    }
}