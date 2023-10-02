package LaCiguenia.commons.domains.entity.store;

import LaCiguenia.commons.domains.entity.opening.OpeningEntity;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.relational.core.sql.In;

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

    @Column(name = "store_nit")
    private Integer storeNit;

    @Column(name = "store_name")
    private String storeName;

    @Column(name = "store_location")
    private String storeLocation;

    @Column(name = "store_number")
    private String storeNumber;

    @Column(name = "store_status")
    private String storeStatus;

    @OneToMany(mappedBy = "storeEntity")
    @JsonManagedReference
    @JsonIgnore
    private List<OpeningEntity> listOpening;
}
