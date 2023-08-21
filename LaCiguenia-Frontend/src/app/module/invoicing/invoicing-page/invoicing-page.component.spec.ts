import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicingPageComponent } from './invoicing-page.component';

describe('InvoicingPageComponent', () => {
  let component: InvoicingPageComponent;
  let fixture: ComponentFixture<InvoicingPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvoicingPageComponent]
    });
    fixture = TestBed.createComponent(InvoicingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
