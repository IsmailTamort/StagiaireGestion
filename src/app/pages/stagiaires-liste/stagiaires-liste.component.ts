import { Component, Input, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Stagiaire } from '../../stagiaire';
import { StagiaireService } from '../../stagiaire.service';
@Component({
  selector: 'app-stagiaires-liste',
  templateUrl: './stagiaires-liste.component.html',
  styleUrls: ['./stagiaires-liste.component.css'],
})
export class StagiairesListeComponent implements OnInit {
  public editStagiaire: Stagiaire;
  public deleteStagiaire: Stagiaire;
  @Input() stagiaires : Stagiaire[]

  constructor(private stagiaireService: StagiaireService) {}

  ngOnInit() {
    //this.getStagiaires();
  }
  public getStagiaires(): void {
    this.stagiaireService.getStagiaires().subscribe(
      (response: Stagiaire[]) => {
        this.stagiaires = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  /*
add stagiaire 
*/

  public onAddStagiare(addForm: NgForm): void {
    document.getElementById('add-stagiaire-form')?.click();
    this.stagiaireService.addStagiaire(addForm.value).subscribe(
      (response: Stagiaire) => {
        console.log(response);
        this.getStagiaires();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  /*  edit stagiaire */
  public onUpdateStagiare(stagiaire: Stagiaire): void {
    this.stagiaireService.updateStagiaire(stagiaire).subscribe(
      (response: Stagiaire) => {
        console.log(response);
        this.getStagiaires();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  /*delete stagiaire */
  public onDeleteStagiaire(stagiaireId: number): void {
    this.stagiaireService.deleteStagiaire(stagiaireId).subscribe(
      (response: void) => {
        console.log(response);
        this.getStagiaires();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public onOpenModal(stagiaire: Stagiaire, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addStagiaireModal');
    }
    if (mode === 'edit') {
      this.editStagiaire = stagiaire;
      button.setAttribute('data-target', '#updateStagiaireModal');
    }
    if (mode === 'delete') {
      this.deleteStagiaire = stagiaire;
      button.setAttribute('data-target', '#deleteStagiaireModal');
    }
    container?.appendChild(button);
    button.click();
  }
}
