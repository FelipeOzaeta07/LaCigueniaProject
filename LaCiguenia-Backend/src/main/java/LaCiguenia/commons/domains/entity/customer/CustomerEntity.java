package LaCiguenia.commons.domains.entity.customer;

import jakarta.persistence.*;
import lombok.*;

@Builder(builderMethodName = "newInstance")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "customer_ciguenia")
public class CustomerEntity {
    @Id
    @Column(name = "customer_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer customerId;
    @Column(name = "customer_name")
    private String customerName;
    @Column(name = "customer_last_name")
    private String customerLastName;
    @Column(name = "customer_phone_number")
    private String customerPhoneNumber;
    @Column(name = "customer_address")
    private String customerAddress;
    @Column(name = "customer_email")
    private String customerEmail;
}
