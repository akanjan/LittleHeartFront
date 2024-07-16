import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadProdImageComponent } from './upload-prod-image.component';

describe('UploadProdImageComponent', () => {
  let component: UploadProdImageComponent;
  let fixture: ComponentFixture<UploadProdImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadProdImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadProdImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
