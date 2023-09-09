package LaCiguenia.commons.domains.responseDTO;

import lombok.*;
import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Builder
public class GenericResponse implements Serializable {
    public Object objectResponseOne;
    public Object objectResponseTwo;
    public Object objectResponseThree;
    public Object objectResponseFour;
    public Object objectResponseFive;
    public Object objectResponseSix;
}