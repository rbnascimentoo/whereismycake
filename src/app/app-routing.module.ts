import { AddSorteioComponent } from './components/sorteio/add-sorteio/add-sorteio.component';
import { ListSorteioComponent } from './components/sorteio/list-sorteio/list-sorteio.component';
import { AddPombosujoComponent } from './components/participante/add-pombosujo/add-pombosujo.component';
import { ListPombosujoComponent } from './components/participante/list-pombosujo/list-pombosujo.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'participante', component: ListPombosujoComponent},
  {path: 'participante/editar', component: AddPombosujoComponent},
  {path: 'participante/novo', component: AddPombosujoComponent},
  {path: 'sorteio', component: ListSorteioComponent},
  {path: 'sorteio/novo', component: AddSorteioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
