import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuserComponent } from './muser.component';

describe('MuserComponent', () => {
  let component: MuserComponent;
  let fixture: ComponentFixture<MuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
