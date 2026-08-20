package com.gigshield.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "payments")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
    
    private String paymentId;
    private BigDecimal amount;
    private String paymentMethod; // UPI, CARD, NETBANKING
    private String status; // PENDING, SUCCESS, FAILED
    private String transactionId;
    private LocalDateTime paymentDate;
    
    @PrePersist
    protected void onCreate() {
        paymentDate = LocalDateTime.now();
    }
}