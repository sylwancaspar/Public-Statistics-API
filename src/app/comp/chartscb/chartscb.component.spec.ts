import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartscbComponent } from './chartscb.component';

describe('ChartscbComponent', () => {
  let component: ChartscbComponent;
  let fixture: ComponentFixture<ChartscbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartscbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartscbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
