import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceprovideremailComponent } from './serviceprovideremail.component';

describe('ServiceprovideremailComponent', () => {
  let component: ServiceprovideremailComponent;
  let fixture: ComponentFixture<ServiceprovideremailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceprovideremailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceprovideremailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
