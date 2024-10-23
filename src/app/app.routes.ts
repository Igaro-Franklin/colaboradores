import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { ColaboradoresComponent } from './colaboradores/colaboradores.component';

export const routes: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'colaboradores', component: ColaboradoresComponent },

    { path: '', redirectTo: '/inicio', pathMatch: 'full' }

];
