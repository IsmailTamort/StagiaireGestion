import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterStagiareComponent } from './ajouter-stagiare.component';

describe('AjouterStagiareComponent', () => {
  let component: AjouterStagiareComponent;
  let fixture: ComponentFixture<AjouterStagiareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterStagiareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterStagiareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
