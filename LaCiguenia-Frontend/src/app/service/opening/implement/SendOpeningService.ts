import { Injectable } from "@angular/core";
import { OpeningModel } from "@commons/domains/opening/OpeningModel";
import { ProductModel } from "@commons/domains/product/ProductModel";
import { BehaviorSubject } from "rxjs";


@Injectable({
    providedIn: 'root'
})

export class SendOpeningService {

    openingModel!: OpeningModel;

    getOpeningModel() {
        return this.openingModel;
    }

    updateOpeningModel(openingModel: OpeningModel) {
        this.openingModel = openingModel;
    }

}