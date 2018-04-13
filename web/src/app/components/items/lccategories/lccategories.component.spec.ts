import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LccategoriesComponent } from './lccategories.component';

describe('LccategoriesComponent', () => {
  let component: LccategoriesComponent;
  let fixture: ComponentFixture<LccategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LccategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LccategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
