import { MethodPaymentModel } from "@commons/domains/payment/MethodPaymentModel";
import { ProductModel } from "@commons/domains/product/ProductModel";
import { CategoryModel } from "@commons/domains/category/CategoryModel";
import { OpeningModel } from "@commons/domains/opening/OpeningModel";

export interface ExpenseModel{
    expenseId : number;
    expenseDate: string;
    expenseNumberInvoice: string;
    expenseSupplierLocation: string;
    expenseValue: number;
    expenseDescription: string;
    expenseStatus: string;
    paymentMethodEntity: MethodPaymentModel;
    openingEntity: OpeningModel
}