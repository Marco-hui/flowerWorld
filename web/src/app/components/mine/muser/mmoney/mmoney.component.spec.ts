import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MmoneyComponent } from './mmoney.component';

describe('MmoneyComponent', () => {
  let component: MmoneyComponent;
  let fixture: ComponentFixture<MmoneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MmoneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MmoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
