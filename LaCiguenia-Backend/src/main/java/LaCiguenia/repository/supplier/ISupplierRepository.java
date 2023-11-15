package LaCiguenia.repository.supplier;


import LaCiguenia.commons.domains.entity.supplier.SupplierEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface ISupplierRepository extends JpaRepository<SupplierEntity, Integer> {

    @Query( value = "SELECT * FROM supplier_ciguenia WHERE supplier_status = 'Habilitado'\n" +
                    "ORDER BY supplier_id DESC LIMIT 3;", nativeQuery = true)
    List<SupplierEntity> threeLastSuppliers();

    @Query (value = "SELECT * FROM supplier_ciguenia WHERE supplier_status = 'Habilitado'", nativeQuery = true)
    List<SupplierEntity> findSuppliersEnabled();

    @Query(value =  "SELECT * FROM supplier_ciguenia sc \n" +
                    "WHERE sc.supplier_status = 'Habilitado' \n" +
                    "AND supplier_name LIKE CONCAT(:supplier_name);", nativeQuery = true)
    Optional<SupplierEntity> readSupplierForName(@Param("supplier_name") String supplierName);
}