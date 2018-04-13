import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MpswComponent } from './mpsw.component';

describe('MpswComponent', () => {
  let component: MpswComponent;
  let fixture: ComponentFixture<MpswComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MpswComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MpswComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
