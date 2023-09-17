import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DetailProductMoreSold } from '@commons/domains/detail/DetailProductMoreSold';
import { TITLE, UNIT } from '@module/admin/admin-page/component/section-two/constans/section-two';

@Component({
  selector: 'app-section-two',
  templateUrl: './section-two.component.html',
  styleUrls: ['./section-two.component.scss']
})
export class SectionTwoComponent {

  @Output() modalActivateOne = new EventEmitter<boolean>();
  @Output() sendDetailProductMoreSold = new EventEmitter<DetailProductMoreSold>();
  @Input() productMoreSold!: DetailProductMoreSold [][];


  textTitle = TITLE;
  textUnit = UNIT;

  modalEvent(n: number, i: number){
    this.sendDetailProductMoreSold.emit(this.productMoreSold[n][i])
    this.modalActivateOne.emit(true);
  }
}
