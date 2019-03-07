import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheCommandeComponent } from './affiche-commande.component';

describe('AfficheCommandeComponent', () => {
  let component: AfficheCommandeComponent;
  let fixture: ComponentFixture<AfficheCommandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficheCommandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficheCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
