import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-one',
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.scss']
})
export class SectionOneComponent implements OnInit{

  startIndex = 0;
  endIndex!: number;
  resulAbs!: number;
  divider = 4;
  categoriesToShow: any[] = [];

  ngOnInit(): void {
    let count = 0;
    for (const category of this.category) {
        console.log(category.name);
        count++;
    }
    this.endIndex = count;
    const result = this.endIndex / this.divider;
    const resultAbs = Math.abs(result);
    this.resulAbs = resultAbs;
    this.endIndex = this.divider;
    this.showCategories();
  }

  showCategories() {
    this.categoriesToShow = this.category.slice(this.startIndex, this.endIndex);
  }

  showNextCategories() {
    this.startIndex = this.endIndex;
    this.endIndex += this.divider;
    this.showCategories();
  }

  showPreviusCategories() {
    this.endIndex = this.startIndex;
    this.startIndex -= this.divider;
    this.showCategories();
  }

  category = [
    { name: "Trajes Tipicos" },
    { name: "Infantil" },
    { name: "Hogar" },
    { name: "Linea Blanca" },
    { name: "Cosmeticos" },
    { name: "Textil" },
    { name: "Alcohol" },
    { name: "Tecnologia" },
    { name: "Cosmeticos" },
    { name: "Textil" },
    { name: "Alcohol" }
  ];

  one(index: number){
    console.log( "prueba de eliminacion: " + (index + 1))
  }
}