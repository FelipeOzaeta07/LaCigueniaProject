import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsuppliersPageComponent } from './listsuppliers-page.component';

describe('ListsuppliersPageComponent', () => {
  let component: ListsuppliersPageComponent;
  let fixture: ComponentFixture<ListsuppliersPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListsuppliersPageComponent]
    });
    fixture = TestBed.createComponent(ListsuppliersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
