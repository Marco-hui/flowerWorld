import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MallorderComponent } from './mallorder.component';

describe('MallorderComponent', () => {
  let component: MallorderComponent;
  let fixture: ComponentFixture<MallorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MallorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MallorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
