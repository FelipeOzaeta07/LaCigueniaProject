package LaCiguenia.commons.domains.wrapper;

public interface IDetailExpenseForPayment {
    Integer getPaymentMethodId();
    String getPaymentMethodName();
    Double getPaymentMethodSum();
}