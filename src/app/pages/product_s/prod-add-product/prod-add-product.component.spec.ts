import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdAddProductComponent } from './prod-add-product.component';

describe('ProdAddProductComponent', () => {
  let component: ProdAddProductComponent;
  let fixture: ComponentFixture<ProdAddProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdAddProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdAddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
