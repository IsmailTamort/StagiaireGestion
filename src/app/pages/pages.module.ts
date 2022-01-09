import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { StagiairesListeComponent } from './stagiaires-liste/stagiaires-liste.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      // {
      //   path: 'add', // child route path
      //   component: AjouterStagiareComponent, // child route component that the router renders
      // },
    ],
  },
];

@NgModule({
  declarations: [HeaderComponent, StagiairesListeComponent, PagesComponent],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
})
export class PagesModule {}
