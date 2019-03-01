import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreerComponent } from './admin-creer.component';

describe('AdminCreerComponent', () => {
  let component: AdminCreerComponent;
  let fixture: ComponentFixture<AdminCreerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCreerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCreerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
