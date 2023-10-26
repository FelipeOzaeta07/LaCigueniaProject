import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-section-five',
  templateUrl: './section-five.component.html',
  styleUrls: ['./section-five.component.scss']
})
export class SectionFiveComponent {

  @Output() eventCategoryAddComponent = new EventEmitter<boolean>;



  eventCategoryAdd(){
    this.eventCategoryAddComponent.emit(false);
  }
}