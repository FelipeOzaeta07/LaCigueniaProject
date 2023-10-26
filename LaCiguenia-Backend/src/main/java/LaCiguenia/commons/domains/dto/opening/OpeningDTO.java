package LaCiguenia.commons.domains.dto.opening;

import LaCiguenia.commons.domains.entity.store.StoreEntity;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import lombok.*;
import java.io.Serializable;
import java.time.LocalDate;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Builder
public class OpeningDTO implements Serializable {
    private Integer openingId;
    private LocalDate openingDate;
    private Double openingTotal;
    @JsonIdentityReference(alwaysAsId = true)
    private StoreEntity storeEntity;
}