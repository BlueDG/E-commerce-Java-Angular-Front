import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSearchOrderComponent } from './admin-search-order.component';

describe('AdminSearchOrderComponent', () => {
  let component: AdminSearchOrderComponent;
  let fixture: ComponentFixture<AdminSearchOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSearchOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSearchOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
