import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendEmailsToAllComponent } from './send-emails-to-all.component';

describe('SendEmailsToAllComponent', () => {
  let component: SendEmailsToAllComponent;
  let fixture: ComponentFixture<SendEmailsToAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendEmailsToAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendEmailsToAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
