import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StagiairesListeComponent } from './stagiaires-liste.component';

describe('StagiairesListeComponent', () => {
  let component: StagiairesListeComponent;
  let fixture: ComponentFixture<StagiairesListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StagiairesListeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StagiairesListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
