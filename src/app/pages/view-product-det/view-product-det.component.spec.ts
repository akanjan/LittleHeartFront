import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductDetComponent } from './view-product-det.component';

describe('ViewProductDetComponent', () => {
  let component: ViewProductDetComponent;
  let fixture: ComponentFixture<ViewProductDetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProductDetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewProductDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
