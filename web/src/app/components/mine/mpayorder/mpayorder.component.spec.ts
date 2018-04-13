import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MpayorderComponent } from './mpayorder.component';

describe('MpayorderComponent', () => {
  let component: MpayorderComponent;
  let fixture: ComponentFixture<MpayorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MpayorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MpayorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
