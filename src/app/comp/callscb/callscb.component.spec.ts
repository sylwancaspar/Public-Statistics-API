import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallscbComponent } from './callscb.component';

describe('CallscbComponent', () => {
  let component: CallscbComponent;
  let fixture: ComponentFixture<CallscbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallscbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallscbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
