import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Car } from './car.model';
import { Inject, Injectable } from '@angular/core';

export interface CarState extends EntityState<Car> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'car' }) 
export class CarStore extends EntityStore<CarState> {
    constructor() {
        super();
    }}