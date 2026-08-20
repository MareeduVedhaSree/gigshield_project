// package com.gigshield.model;

// import jakarta.persistence.*;
// import lombok.Data;
// import lombok.NoArgsConstructor;
// import lombok.AllArgsConstructor;
// import java.math.BigDecimal;
// import java.time.LocalDateTime;

// @Entity
// @Table(name = "transactions")
// @Data
// @NoArgsConstructor
// @AllArgsConstructor
// public class Transaction {
//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private Long id;
    
//     @ManyToOne
//     @JoinColumn(name = "wallet_id")
//     private Wallet wallet;
    
//     private String description;
//     private BigDecimal amount;
//     private String type; // CREDIT, DEBIT
//     private String status; // PENDING, SUCCESS, FAILED
//     private LocalDateTime transactionDate;
    
//     @PrePersist
//     protected void onCreate() {
//         transactionDate = LocalDateTime.now();
//     }
// }





package com.gigshield.model;

import jakarta.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "transactions")
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne
    @JoinColumn(name = "wallet_id")
    private Wallet wallet;
    
    private String description;
    private BigDecimal amount;
    private String type;
    private LocalDateTime transactionDate;
    
    public Transaction() {}
    
    @PrePersist
    protected void onCreate() {
        transactionDate = LocalDateTime.now();
    }
    
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    
    public Wallet getWallet() { return wallet; }
    public void setWallet(Wallet wallet) { this.wallet = wallet; }
    
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    
    public BigDecimal getAmount() { return amount; }
    public void setAmount(BigDecimal amount) { this.amount = amount; }
    
    public String getType() { return type; }
    public void setType(String type) { this.type = type; }
    
    public LocalDateTime getTransactionDate() { return transactionDate; }
    public void setTransactionDate(LocalDateTime transactionDate) { this.transactionDate = transactionDate; }
}