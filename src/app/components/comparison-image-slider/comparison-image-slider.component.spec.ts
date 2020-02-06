import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparisonImageSliderComponent } from './comparison-image-slider.component';

describe('ComparisonImageSliderComponent', () => {
  let component: ComparisonImageSliderComponent;
  let fixture: ComponentFixture<ComparisonImageSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparisonImageSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparisonImageSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
