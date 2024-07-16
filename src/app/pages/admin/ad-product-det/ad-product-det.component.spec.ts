import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdProductDetComponent } from './ad-product-det.component';

describe('AdProductDetComponent', () => {
  let component: AdProductDetComponent;
  let fixture: ComponentFixture<AdProductDetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdProductDetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdProductDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
