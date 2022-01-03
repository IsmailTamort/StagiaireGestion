import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Stagiaire} from './stagiaire';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})
export class StagiaireService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient){}

  
  public getStagiaires(): Observable<Stagiaire[]> {
  
    return this.http.get<Stagiaire[]>(`${this.apiServerUrl}/stagiaire/all`);
  }

  public addStagiaire(stagiaire: Stagiaire): Observable<Stagiaire> {
    return this.http.post<Stagiaire>(`${this.apiServerUrl}/stagiaire/add`, stagiaire);
  }

  public updateStagiaire(stagiaire: Stagiaire): Observable<Stagiaire> {
    return this.http.put<Stagiaire>(`${this.apiServerUrl}/stagiaire/update`, stagiaire);
  }

  public deleteStagiaire(stagiaireId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/stagiaire/delete/${stagiaireId}`);
  }
  
}
