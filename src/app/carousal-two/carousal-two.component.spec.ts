import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarousalTwoComponent } from './carousal-two.component';

describe('CarousalTwoComponent', () => {
  let component: CarousalTwoComponent;
  let fixture: ComponentFixture<CarousalTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarousalTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarousalTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
