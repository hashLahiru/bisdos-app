// angular routing
import {Routes} from "@angular/router";

export const routes: Routes = [
    {
        path:"",
        loadComponent:()=>import("./sign-in/sign-in.component").then(page=>page.SignInComponent)
    }
]
