import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McollectComponent } from './mcollect.component';

describe('McollectComponent', () => {
  let component: McollectComponent;
  let fixture: ComponentFixture<McollectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McollectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McollectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
