// angular router
import {Routes} from "@angular/router";

export const routes:Routes=[
    {
        path:"profile/:id",
        loadComponent:()=>import("./user-home/user-home.component").then(page=>page.UserHomeComponent)
    },
    {
        path:"edit",
        loadComponent:()=>import("./user-edit/user-edit.component").then(page=>page.UserEditComponent)
    }
]
