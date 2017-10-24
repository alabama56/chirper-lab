import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualLogComponent } from './actual-log.component';

describe('ActualLogComponent', () => {
  let component: ActualLogComponent;
  let fixture: ComponentFixture<ActualLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
