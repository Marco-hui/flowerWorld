import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdermanComponent } from './orderman.component';

describe('OrdermanComponent', () => {
  let component: OrdermanComponent;
  let fixture: ComponentFixture<OrdermanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdermanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdermanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
