import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalThreeComponent } from './modal-three.component';

describe('ModalThreeComponent', () => {
  let component: ModalThreeComponent;
  let fixture: ComponentFixture<ModalThreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalThreeComponent]
    });
    fixture = TestBed.createComponent(ModalThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
