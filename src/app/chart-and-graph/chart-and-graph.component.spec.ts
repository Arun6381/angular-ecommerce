import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartAndGraphComponent } from './chart-and-graph.component';

describe('ChartAndGraphComponent', () => {
  let component: ChartAndGraphComponent;
  let fixture: ComponentFixture<ChartAndGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartAndGraphComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartAndGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
