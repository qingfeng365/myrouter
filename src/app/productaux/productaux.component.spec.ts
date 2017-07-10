import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductauxComponent } from './productaux.component';

describe('ProductauxComponent', () => {
  let component: ProductauxComponent;
  let fixture: ComponentFixture<ProductauxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductauxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
