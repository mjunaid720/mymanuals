import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewManualRecordComponent } from './view-manual-record.component';

describe('ViewManualRecordComponent', () => {
  let component: ViewManualRecordComponent;
  let fixture: ComponentFixture<ViewManualRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewManualRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewManualRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
