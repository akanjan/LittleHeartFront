import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdCategoryDetComponent } from './ad-category-det.component';

describe('AdCategoryDetComponent', () => {
  let component: AdCategoryDetComponent;
  let fixture: ComponentFixture<AdCategoryDetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdCategoryDetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdCategoryDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
