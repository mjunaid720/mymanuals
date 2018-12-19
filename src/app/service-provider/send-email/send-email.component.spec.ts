import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SencEmailComponent } from './send-email.component';

describe('SencEmailComponent', () => {
  let component: SencEmailComponent;
  let fixture: ComponentFixture<SencEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SencEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SencEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
