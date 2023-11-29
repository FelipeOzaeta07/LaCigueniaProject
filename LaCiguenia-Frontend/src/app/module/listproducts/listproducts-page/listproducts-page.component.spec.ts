import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListproductsPageComponent } from './listproducts-page.component';

describe('ListproductsPageComponent', () => {
  let component: ListproductsPageComponent;
  let fixture: ComponentFixture<ListproductsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListproductsPageComponent]
    });
    fixture = TestBed.createComponent(ListproductsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
