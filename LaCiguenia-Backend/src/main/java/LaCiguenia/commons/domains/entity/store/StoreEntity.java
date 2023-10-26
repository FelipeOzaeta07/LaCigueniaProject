package LaCiguenia.commons.domains.entity.store;

import LaCiguenia.commons.domains.entity.opening.OpeningEntity;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Builder(builderMethodName = "newInstance")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "store_ciguenia")
public class StoreEntity {

    @Id
    @Column(name = "store_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer storeId;

    @Column(name = "store_name")
    private String storeName;

    @Column(name = "store_number_nit")
    private String storeNumberNit;

    @Column(name = "store_type")
    private String storeType;

    @Column(name = "store_phone_number")
    private String storePhoneNumber;

    @Column(name = "store_email")
    private String storeEmail;

    @Column(name = "store_code_ciiu")
    private String storeCodeCIIU;

    @Column(name = "store_city")
    private String storeCity;

    @Column(name = "store_address")
    private String storeAddress;

    @Column(name = "store_status")
    private String storeStatus;

    @OneToMany(mappedBy = "storeEntity")
    @JsonManagedReference
    @JsonIgnore
    private List<OpeningEntity> listOpening;
}