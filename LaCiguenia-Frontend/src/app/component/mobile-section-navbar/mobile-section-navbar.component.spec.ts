import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileSectionNavbarComponent } from './mobile-section-navbar.component';

describe('MobileSectionNavbarComponent', () => {
  let component: MobileSectionNavbarComponent;
  let fixture: ComponentFixture<MobileSectionNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileSectionNavbarComponent]
    });
    fixture = TestBed.createComponent(MobileSectionNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
