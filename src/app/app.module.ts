import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { AddPombosujoComponent } from './components/participant/add-pombosujo/add-pombosujo.component';
import { ListPombosujoComponent } from './components/participant/list-pombosujo/list-pombosujo.component';
import { AddSorteioComponent } from './components/sortition/add-sorteio/add-sorteio.component';
import { ListSorteioComponent } from './components/sortition/list-sorteio/list-sorteio.component';
import { ListCakeComponent } from './components/cake/list-cake/list-cake.component';
import { AddCakeComponent } from './components/cake/add-cake/add-cake.component';
import { ViewSortitionComponent } from './components/sortition/view-sortition/view-sortition.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    AddPombosujoComponent,
    ListPombosujoComponent,
    AddSorteioComponent,
    ListSorteioComponent,
    ListCakeComponent,
    AddCakeComponent,
    ViewSortitionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
