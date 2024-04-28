// angular routing
import { Routes } from '@angular/router';
// common routes
import {routes as commonRoutes} from "./module/common/routes";
// user routes
import {routes as userRoutes} from "./module/user/routes";

export const routes: Routes = [
    {
        path:"",
        children:commonRoutes
    },
    {
        path:"user/:id",
        children:userRoutes
    }
];
