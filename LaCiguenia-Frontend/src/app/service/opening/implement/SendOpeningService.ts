import { Injectable } from "@angular/core";
import { OpeningModel } from "@commons/domains/opening/OpeningModel";
import { ProductModel } from "@commons/domains/product/ProductModel";
import { BehaviorSubject } from "rxjs";


@Injectable({
    providedIn: 'root'
})

export class SendOpeningService {

    private openingModel = new BehaviorSubject<OpeningModel | null>(null);

    getOpeningId() {
        return this.openingModel.asObservable();
    }

    updateOpeningId(openingModel: OpeningModel) {
        this.openingModel.next(openingModel);
    }
}