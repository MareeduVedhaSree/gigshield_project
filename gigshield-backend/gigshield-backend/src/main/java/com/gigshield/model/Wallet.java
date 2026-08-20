// package com.gigshield.model;

// import jakarta.persistence.*;
// import lombok.Data;
// import lombok.NoArgsConstructor;
// import lombok.AllArgsConstructor;
// import java.math.BigDecimal;
// import java.time.LocalDateTime;
// import java.util.ArrayList;
// import java.util.List;

// @Entity
// @Table(name = "wallets")
// @Data
// @NoArgsConstructor
// @AllArgsConstructor
// public class Wallet {
//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private Long id;
    
//     @OneToOne
//     @JoinColumn(name = "user_id", unique = true)
//     private User user;
    
//     private BigDecimal balance = BigDecimal.ZERO;
//     private LocalDateTime lastUpdated;
    
//     @OneToMany(mappedBy = "wallet", cascade = CascadeType.ALL)
//     private List<Transaction> transactions = new ArrayList<>();
    
//     @PreUpdate
//     protected void onUpdate() {
//         lastUpdated = LocalDateTime.now();
//     }
// }






package com.gigshield.model;

import jakarta.persistence.*;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "wallets")
public class Wallet {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;
    
    private BigDecimal balance = BigDecimal.valueOf(1200);
    
    @OneToMany(mappedBy = "wallet", cascade = CascadeType.ALL)
    private List<Transaction> transactions = new ArrayList<>();
    
    public Wallet() {}
    
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    
    public User getUser() { return user; }
    public void setUser(User user) { this.user = user; }
    
    public BigDecimal getBalance() { return balance; }
    public void setBalance(BigDecimal balance) { this.balance = balance; }
    
    public List<Transaction> getTransactions() { return transactions; }
    public void setTransactions(List<Transaction> transactions) { this.transactions = transactions; }
}