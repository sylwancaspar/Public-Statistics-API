import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuScbItemComponent } from './menu-scb-item.component';

describe('MenuScbItemComponent', () => {
  let component: MenuScbItemComponent;
  let fixture: ComponentFixture<MenuScbItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuScbItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuScbItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
