package LaCiguenia.commons.constans.endpoints.supplier;

public interface ISupplierEndPoint {
    String BASE_URL_SUPPLIER = "/proveedor";
    String CREATE_SUPPLIER = "/crear-proveedor";
    String READ_SUPPLIERS = "/leer-proveedores";
    String READ_THREE_LAST_SUPPLIERS = "/leer-ultimos-proveedores";
    String READ_SUPPLIER_NAME = "/leer-proveedor-por-nombre/{supplierName}";
    String UPDATE_SUPPLIER = "/actualizar-proveedor";
    String DELETE_SUPPLIER = "/eliminar-proveedor/{supplierId}";
}