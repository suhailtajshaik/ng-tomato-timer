import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeNowComponent } from './time-now.component';

describe('TimeNowComponent', () => {
  let component: TimeNowComponent;
  let fixture: ComponentFixture<TimeNowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeNowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
