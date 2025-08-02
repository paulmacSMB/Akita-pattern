import { Component, OnInit } from '@angular/core';
import { CarQuery } from './car.query';
import { Observable } from 'rxjs';
import { Car } from './car.model';

@Component({
    selector: 'app-car',
    template: `
        <h2>Available Cars</h2>
        <ul *ngIf="cars$ | async as cars">
            <li *ngFor="let car of cars">
                {{ car.year }} {{ car.makeName }} {{ car.modelName }} - {{ car.colorName }}
            </li>
        </ul> `
        
    })

export class CarComponent implements OnInit {
   
    cars$: Observable<Car[]>;

    constructor(private carQuery: CarQuery) {
         this.cars$ = this.carQuery.selectCars$;
    }
     
    ngOnInit() {
       
        // Any initialization logic can go here
    }
}