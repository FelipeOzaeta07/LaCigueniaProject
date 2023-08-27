import { CustomerEntity } from "@commons/domains/entity/customer/CustomerEntity";
import { CustomerModel } from "@commons/domains/model/customer/CustomerModel";
import { Mapper } from "@commons/helpers/Mapper";

export class CustomerMapper extends Mapper<CustomerEntity, CustomerModel>{
    override converterEntityToModel(params: CustomerEntity): CustomerModel {
        return{
            customerId: params.customerId,
            customerName: params.customerName,
            customerIdentification: params.customerIdentification,
            customerPhoneNumber: params.customerPhoneNumber,
            customerEmail: params.customerEmail,
            customerAddress: params.customerAddress
        };
    }
    override converterModelToEntity(params: CustomerModel): CustomerEntity {
        return{
            customerId: params.customerId,
            customerName: params.customerName,
            customerIdentification: params.customerIdentification,
            customerPhoneNumber: params.customerPhoneNumber,
            customerEmail: params.customerEmail,
            customerAddress: params.customerAddress
        };
    }
}