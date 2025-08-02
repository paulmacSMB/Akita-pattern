import { Component, OnInit } from '@angular/core';
import { CarQuery } from './car.query';
import { Observable } from 'rxjs';
import { Car } from './car.model';
import { CommonModule } from '@angular/common';
import { CarService } from './car.service';

@Component({
    selector: 'app-car',
    standalone: true,
    imports: [CommonModule],
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

    constructor(private carQuery: CarQuery, private carService: CarService) {
         this.cars$ = this.carQuery.selectCars$;
         console.log(this.cars$);
    }
     
    ngOnInit() {
    }
}