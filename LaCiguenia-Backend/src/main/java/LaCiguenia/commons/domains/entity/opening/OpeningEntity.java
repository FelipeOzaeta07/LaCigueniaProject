package LaCiguenia.commons.domains.entity.opening;

import LaCiguenia.commons.domains.entity.detail.DetailEntity;
import LaCiguenia.commons.domains.entity.invoice.InvoiceEntity;
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
@Table(name = "opening_ciguenia")
public class OpeningEntity {
    @Id
    @Column(name = "opening_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer openingId;

    @OneToMany(mappedBy = "invoiceEntity")
    @JsonManagedReference
    @JsonIgnore
    private List<InvoiceEntity> listInvoice;
}