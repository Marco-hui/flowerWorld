import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MmainComponent } from './mmain.component';

describe('MmainComponent', () => {
  let component: MmainComponent;
  let fixture: ComponentFixture<MmainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MmainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
