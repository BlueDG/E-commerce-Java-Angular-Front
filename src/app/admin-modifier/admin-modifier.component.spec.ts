import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminModifierComponent } from './admin-modifier.component';

describe('AdminModifierComponent', () => {
  let component: AdminModifierComponent;
  let fixture: ComponentFixture<AdminModifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminModifierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminModifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
