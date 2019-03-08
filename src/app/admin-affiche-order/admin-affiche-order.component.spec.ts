import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAfficheOrderComponent } from './admin-affiche-order.component';

describe('AdminAfficheOrderComponent', () => {
  let component: AdminAfficheOrderComponent;
  let fixture: ComponentFixture<AdminAfficheOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAfficheOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAfficheOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
