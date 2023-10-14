import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashclosurePageComponent } from './cashclosure-page.component';

describe('CashclosurePageComponent', () => {
  let component: CashclosurePageComponent;
  let fixture: ComponentFixture<CashclosurePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CashclosurePageComponent]
    });
    fixture = TestBed.createComponent(CashclosurePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
