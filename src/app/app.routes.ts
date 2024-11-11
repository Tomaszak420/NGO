import { Routes } from '@angular/router';
import { BlogAkcjiComponent } from './blog-akcji/blog-akcji.component';
import { KalendarzAkcjiComponent } from './kalendarz-akcji/kalendarz-akcji.component';
import { RejestracjaComponent } from './Logowanie/rejestracja/rejestracja.component';
import { WidokWolontariuszaComponent } from './widok-wolontariusza/widok-wolontariusza.component';
import { WidokAdministratoraComponent } from './widok-administratora/widok-administratora.component';
import { StronaAkcjiComponent } from './strona-akcji/strona-akcji.component';

 export  const routes: Routes = [
    { path: '', component: BlogAkcjiComponent }, 
    { path: 'strona-akcji-component', component: StronaAkcjiComponent },  
    { path: 'kalendarz-akcji-component', component: KalendarzAkcjiComponent },
    { path: 'rejestracja-component', component: RejestracjaComponent },  
    { path: 'widok-wolontariusza-component', component: WidokWolontariuszaComponent },
    { path: 'widok-administratora-component', component: WidokAdministratoraComponent },  
   ];
