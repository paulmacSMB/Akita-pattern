import { Routes } from "@angular/router";
import { CarComponent } from "./car.component";
import { CarResolver } from "./car.resolver";

const routes: Routes = [
    {
        path: '',
        component: CarComponent,
        resolve: { data: CarResolver }
    }
]