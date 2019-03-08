import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListOrderComponent } from './admin-list-order.component';

describe('AdminListOrderComponent', () => {
  let component: AdminListOrderComponent;
  let fixture: ComponentFixture<AdminListOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminListOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
