import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MheadComponent } from './mhead.component';

describe('MheadComponent', () => {
  let component: MheadComponent;
  let fixture: ComponentFixture<MheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MheadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
