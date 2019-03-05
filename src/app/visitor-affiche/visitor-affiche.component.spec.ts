import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorAfficheComponent } from './visitor-affiche.component';

describe('VisitorAfficheComponent', () => {
  let component: VisitorAfficheComponent;
  let fixture: ComponentFixture<VisitorAfficheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitorAfficheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorAfficheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
