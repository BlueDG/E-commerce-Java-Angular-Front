import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRechercheComponent } from './admin-recherche.component';

describe('AdminRechercheComponent', () => {
  let component: AdminRechercheComponent;
  let fixture: ComponentFixture<AdminRechercheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRechercheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRechercheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
