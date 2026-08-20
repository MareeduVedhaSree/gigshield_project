package com.gigshield.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "insurance_policies")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class InsurancePolicy {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
    
    private String planName; // BASIC, STANDARD, PREMIUM
    private String riskLevel; // LOW, MEDIUM, HIGH
    private BigDecimal weeklyPremium;
    private BigDecimal dailyCoverage;
    private BigDecimal weeklyEarnings;
    private BigDecimal dailyIncome;
    private String status; // ACTIVE, EXPIRED, CANCELLED
    private LocalDateTime startDate;
    private LocalDateTime endDate;
    private LocalDateTime nextPaymentDate;
    private LocalDateTime createdAt;
    
    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
        startDate = LocalDateTime.now();
        endDate = startDate.plusYears(1);
        nextPaymentDate = startDate.plusDays(30);
        status = "ACTIVE";
    }
}