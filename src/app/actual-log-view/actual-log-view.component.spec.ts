import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualLogViewComponent } from './actual-log-view.component';

describe('ActualLogViewComponent', () => {
  let component: ActualLogViewComponent;
  let fixture: ComponentFixture<ActualLogViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualLogViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualLogViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
