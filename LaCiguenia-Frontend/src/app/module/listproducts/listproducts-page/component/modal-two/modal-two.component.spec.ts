import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTwoComponent } from './modal-two.component';

describe('ModalTwoComponent', () => {
  let component: ModalTwoComponent;
  let fixture: ComponentFixture<ModalTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalTwoComponent]
    });
    fixture = TestBed.createComponent(ModalTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
