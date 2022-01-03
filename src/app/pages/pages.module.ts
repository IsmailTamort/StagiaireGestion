import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { StagiairesListeComponent } from './stagiaires-liste/stagiaires-liste.component';
import { AjouterStagiareComponent } from './ajouter-stagiare/ajouter-stagiare.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  { path: '', component: PagesComponent },
  ];


@NgModule({
  declarations: 
  [
    HeaderComponent,
    AjouterStagiareComponent,
    StagiairesListeComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class PagesModule { }
