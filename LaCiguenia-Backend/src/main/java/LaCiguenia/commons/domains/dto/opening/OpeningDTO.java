package LaCiguenia.commons.domains.dto.opening;

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
    private String openingStore;
    private Integer openingTotal;
}