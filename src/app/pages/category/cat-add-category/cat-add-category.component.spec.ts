import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatAddCategoryComponent } from './cat-add-category.component';

describe('CatAddCategoryComponent', () => {
  let component: CatAddCategoryComponent;
  let fixture: ComponentFixture<CatAddCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatAddCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatAddCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
