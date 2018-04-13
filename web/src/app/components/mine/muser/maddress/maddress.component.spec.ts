import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaddressComponent } from './maddress.component';

describe('MaddressComponent', () => {
  let component: MaddressComponent;
  let fixture: ComponentFixture<MaddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
