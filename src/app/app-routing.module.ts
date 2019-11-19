import { AddSorteioComponent } from './components/sorteio/add-sorteio/add-sorteio.component';
import { ListSorteioComponent } from './components/sorteio/list-sorteio/list-sorteio.component';
import { AddPombosujoComponent } from './components/participante/add-pombosujo/add-pombosujo.component';
import { ListPombosujoComponent } from './components/participante/list-pombosujo/list-pombosujo.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCakeComponent } from './components/cake/add-cake/add-cake.component';
import { ListCakeComponent } from './components/cake/list-cake/list-cake.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'participant', component: ListPombosujoComponent},
  {path: 'participant/edit', component: AddPombosujoComponent},
  {path: 'participant/new', component: AddPombosujoComponent},
  {path: 'sortition', component: ListSorteioComponent},
  {path: 'sortition/new', component: AddSorteioComponent},
  {path: 'cake', component: ListCakeComponent},
  {path: 'cake/edit', component: AddCakeComponent},
  {path: 'cake/new', component: AddCakeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
