import { PagesModule } from './pages/pages.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppComponent } from './app.component';
import { StagiaireService } from './stagiaire.service';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './pages/header/header.component';

const routes: Routes = [
{ path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
{ path: '', redirectTo: '/login', pathMatch: 'full'},
{ path: 'home',
loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)}
];

@NgModule({
declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,FormsModule,
    RouterModule.forRoot(routes),
    PagesModule,
  ],
  providers: [StagiaireService],
  bootstrap: [AppComponent]
})
export class AppModule { }
