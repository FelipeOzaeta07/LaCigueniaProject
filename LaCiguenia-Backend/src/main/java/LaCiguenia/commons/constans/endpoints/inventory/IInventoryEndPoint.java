package LaCiguenia.commons.constans.endpoints.inventory;

public interface IInventoryEndPoint {
    String BASE_URL_INVENTORY = "/inventario";
    String CREATE_INVENTORY = "/crear-inventario";
    String READ_INVENTORY = "/leer-inventario";
    String READ_INVENTORIES = "/leer-inventarios";
    String READ_INVENTORIES_RECENTLY_CREATE = "/leer-inventarios-creados";
    String UPDATE_INVENTORY = "/actualizar-inventario";
    String DELETE_INVENTORY = "/eliminar-inventario{inventoryId}";
    String UPDATE_PAY_INVENTORY = "/actualizar-inventario-compra";
}