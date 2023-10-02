package LaCiguenia.commons.domains.entity.opening;

import LaCiguenia.commons.domains.entity.invoice.InvoiceEntity;
import LaCiguenia.commons.domains.entity.store.StoreEntity;
import com.fasterxml.jackson.annotation.*;
import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;
import java.util.List;

@Builder(builderMethodName = "newInstance")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "opening_ciguenia")
public class OpeningEntity {
    @Id
    @Column(name = "opening_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer openingId;

    @Column(name = "opening_date")
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate openingDate;

    @Column(name = "opening_store")
    private String openingStore;

    @Column(name = "opening_total")
    private Integer openingTotal;

    @OneToMany(mappedBy = "openingEntity")
    @JsonManagedReference
    @JsonIgnore
    private List<InvoiceEntity> listInvoice;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "store_id")
    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "storeId")
    @JsonIgnore
    private StoreEntity storeEntity;
}