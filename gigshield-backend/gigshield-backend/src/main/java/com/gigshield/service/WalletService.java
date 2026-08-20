// package com.gigshield.service;

// import com.gigshield.model.User;
// import com.gigshield.model.Wallet;
// import com.gigshield.model.Transaction;
// import com.gigshield.repository.WalletRepository;
// import com.gigshield.repository.TransactionRepository;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;
// import org.springframework.transaction.annotation.Transactional;
// import java.math.BigDecimal;

// @Service
// public class WalletService {
    
//     @Autowired
//     private WalletRepository walletRepository;
    
//     @Autowired
//     private TransactionRepository transactionRepository;
    
//     public Wallet getWalletByUser(User user) {
//         return walletRepository.findByUser(user)
//             .orElseThrow(() -> new RuntimeException("Wallet not found"));
//     }
    
//     @Transactional
//     public Wallet addFunds(User user, BigDecimal amount, String description) {
//         Wallet wallet = getWalletByUser(user);
//         wallet.setBalance(wallet.getBalance().add(amount));
        
//         Transaction transaction = new Transaction();
//         transaction.setWallet(wallet);
//         transaction.setDescription(description);
//         transaction.setAmount(amount);
//         transaction.setType("CREDIT");
//         transaction.setStatus("SUCCESS");
//         transactionRepository.save(transaction);
        
//         return walletRepository.save(wallet);
//     }
    
//     @Transactional
//     public Wallet deductFunds(User user, BigDecimal amount, String description) {
//         Wallet wallet = getWalletByUser(user);
        
//         if (wallet.getBalance().compareTo(amount) < 0) {
//             throw new RuntimeException("Insufficient balance");
//         }
        
//         wallet.setBalance(wallet.getBalance().subtract(amount));
        
//         Transaction transaction = new Transaction();
//         transaction.setWallet(wallet);
//         transaction.setDescription(description);
//         transaction.setAmount(amount.negate());
//         transaction.setType("DEBIT");
//         transaction.setStatus("SUCCESS");
//         transactionRepository.save(transaction);
        
//         return walletRepository.save(wallet);
//     }
// }




package com.gigshield.service;

import com.gigshield.model.User;
import com.gigshield.model.Wallet;
import com.gigshield.model.Transaction;
import com.gigshield.repository.WalletRepository;
import com.gigshield.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.math.BigDecimal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class WalletService {
    
    @Autowired
    private WalletRepository walletRepository;
    
    @Autowired
    private TransactionRepository transactionRepository;
    
    public Map<String, Object> getWalletWithTransactions(User user) {
        Wallet wallet = walletRepository.findByUser(user)
            .orElseThrow(() -> new RuntimeException("Wallet not found"));
        
        Map<String, Object> response = new HashMap<>();
        response.put("balance", wallet.getBalance());
        response.put("transactions", wallet.getTransactions());
        
        return response;
    }
}