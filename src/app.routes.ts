import { Routes, RouterModule } from "@angular/router";
import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { DashboardPageComponent } from "./pages/dashboard-page/dashboard-page.component";
import { CardspecificPageComponent} from "./pages/cardspecific-page/cardspecific-page.component";
import { AboutPageComponent } from "./pages/about-page/about-page.component";
import { ContactPageComponent } from "./pages/contact-page/contact-page.component";
import { from } from 'rxjs';

const routes: Routes = [
    {path: "", component: LoginPageComponent},
    {path: "dashboard", component: DashboardPageComponent},
    {path: "cardspecific/:id", component: CardspecificPageComponent},
    {path: "about", component: AboutPageComponent},
    {path: "contact", component: ContactPageComponent},
];

export const routing = RouterModule.forRoot(routes);