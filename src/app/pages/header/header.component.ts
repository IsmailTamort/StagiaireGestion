import { Component, OnInit } from '@angular/core';
import { Stagiaire } from '../../stagiaire';
import { StagiaireService } from '../../stagiaire.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public stagiaires: Stagiaire[];
  public editStagiaire: Stagiaire;
  public deleteStagiaire: Stagiaire;

  constructor(private stagiaireService: StagiaireService){}
 

  ngOnInit(): void {
  }
  public searchStagiaires(key: string): void {
    console.log(key);
    const results: Stagiaire[] = [];
    for (const stagiaire of this.stagiaires) {
      if (stagiaire.nom.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || stagiaire.prenom.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || stagiaire.email.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || stagiaire.tel.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || stagiaire.competence.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(stagiaire);
      }
    }
    this.stagiaires = results;
    if (results.length === 0 || !key) {
      this.getStagiaires();
    }
  }
  public getStagiaires():void{
    this.stagiaireService.getStagiaires().subscribe(
    (response:Stagiaire[]) => {
      this.stagiaires=response;
    },
    (error:HttpErrorResponse)=>{
      alert(error.message);
    }
  );
  }
  public onOpenModal(stagiaire: Stagiaire, mode: string): void {
    const container= document.getElementById('main-container');
    const button = document.createElement('button');
    button.type ='button'; 
    button.style.display ='none';
    button.setAttribute('data-toggle','modal');
    if(mode === 'add'){
      button.setAttribute('data-target','#addStagiaireModal');
    }
    if(mode === 'edit'){
      this.editStagiaire= stagiaire;
      button.setAttribute('data-target','#updateStagiaireModal');
    }
    if(mode === 'delete'){
      this.deleteStagiaire= stagiaire;
      button.setAttribute('data-target','#deleteStagiaireModal');
    }
    container?.appendChild(button);
    button.click();
  }
}
