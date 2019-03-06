import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilModifierComponent } from './profil-modifier.component';

describe('ProfilModifierComponent', () => {
  let component: ProfilModifierComponent;
  let fixture: ComponentFixture<ProfilModifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilModifierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilModifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
