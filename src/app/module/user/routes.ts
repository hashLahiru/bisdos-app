// angular router
import {Routes} from "@angular/router";

export const routes:Routes=[
    {
        path:"",
        loadComponent:()=>import("./user-home/user-home.component").then(page=>page.UserHomeComponent)
    }
]
