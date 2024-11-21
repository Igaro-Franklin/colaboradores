import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { ColaboradoresComponent } from './colaboradores/colaboradores.component';
import { FeriasComponent } from './ferias/ferias.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { DemissaoComponent } from './demissao/demissao.component';

export const routes: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'colaboradores', component: ColaboradoresComponent },
    { path: 'ferias', component: FeriasComponent },
    { path: 'cadastro', component: CadastroComponent },
    { path: 'demissao', component: DemissaoComponent },

    { path: '', redirectTo: '/inicio', pathMatch: 'full' }

];
