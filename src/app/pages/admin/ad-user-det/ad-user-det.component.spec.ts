import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdUserDetComponent } from './ad-user-det.component';

describe('AdUserDetComponent', () => {
  let component: AdUserDetComponent;
  let fixture: ComponentFixture<AdUserDetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdUserDetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdUserDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
