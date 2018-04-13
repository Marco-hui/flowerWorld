import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MmsgComponent } from './mmsg.component';

describe('MmsgComponent', () => {
  let component: MmsgComponent;
  let fixture: ComponentFixture<MmsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MmsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MmsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
