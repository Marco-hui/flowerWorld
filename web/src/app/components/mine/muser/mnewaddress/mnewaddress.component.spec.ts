import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MnewaddressComponent } from './mnewaddress.component';

describe('MnewaddressComponent', () => {
  let component: MnewaddressComponent;
  let fixture: ComponentFixture<MnewaddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MnewaddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MnewaddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
