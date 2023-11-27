package LaCiguenia.commons.constans.endpoints.invoice;

public interface IInvoiceEndPoint {
    String BASE_URL_INVOICE = "/factura";
    String CREATE_INVOICE = "/crear-factura";
    String READ_INVOICE = "/leer-factura";
    String READ_INVOICES = "/leer-facturas";
    String READ_INVOICES_MONTH_DAY = "/leer-facturas-mes-dia/{storeId}";
    String READ_TOTAL_INVOICES_PREVIOUS_DAY = "/leer-facturas-dia-anterior";
    String UPDATE_INVOICE = "/actualizar-factura";
    String DELETE_INVOICE = "/eliminar-factura{invoiceId}";
}