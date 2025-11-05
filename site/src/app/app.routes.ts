import { Routes } from '@angular/router';
import { Pagina1 } from './pagina1/pagina1';
import { Pagina2 } from './pagina2/pagina2';


export const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    //se l'URL è /pagina1 mostra il componente Pagina1
    { path: 'pagina1', component: Pagina1 },
    { path: 'pagina2', component: Pagina2 },
];
