package LaCiguenia.commons.domains.dto.opening;

import lombok.*;
import java.io.Serializable;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Builder
public class OpeningDTO implements Serializable {
    private Integer openingId;
}