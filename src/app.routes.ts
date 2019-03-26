import { Routes, RouterModule } from "@angular/router";
import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { DashboardPageComponent } from "./pages/dashboard-page/dashboard-page.component";
import { CardspecificPageComponent} from "./pages/cardspecific-page/cardspecific-page.component";


const routes: Routes = [
    {path: "", component: LoginPageComponent},
    {path: "dashboard", component: DashboardPageComponent},
    {path: "cardspecific/:id", component: CardspecificPageComponent},
];

export const routing = RouterModule.forRoot(routes);