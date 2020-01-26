import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarousalItemComponent } from './carousal-item.component';

describe('CarousalItemComponent', () => {
  let component: CarousalItemComponent;
  let fixture: ComponentFixture<CarousalItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarousalItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarousalItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
