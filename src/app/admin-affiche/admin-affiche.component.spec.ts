import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAfficheComponent } from './admin-affiche.component';

describe('AdminAfficheComponent', () => {
  let component: AdminAfficheComponent;
  let fixture: ComponentFixture<AdminAfficheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAfficheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAfficheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
