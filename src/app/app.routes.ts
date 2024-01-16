// angular routing
import { Routes } from '@angular/router';
// common routes
import {routes as commonRoutes} from "./module/common/routes";

export const routes: Routes = [
    {
        path:"",
        children:commonRoutes
    }
];
