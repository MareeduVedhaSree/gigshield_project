// package com.gigshield.service;

// import com.gigshield.dto.SignupRequest;
// import com.gigshield.model.User;
// import com.gigshield.model.Wallet;
// import com.gigshield.model.BankDetails;
// import com.gigshield.repository.UserRepository;
// import com.gigshield.repository.WalletRepository;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
// import org.springframework.stereotype.Service;
// import org.springframework.transaction.annotation.Transactional;
// import java.math.BigDecimal;

// @Service
// public class UserService {
    
//     @Autowired
//     private UserRepository userRepository;
    
//     @Autowired
//     private WalletRepository walletRepository;
    
//     private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
    
//     @Transactional
//     public User registerUser(SignupRequest request) {
//         if (userRepository.existsByUsername(request.getUsername())) {
//             throw new RuntimeException("Username already exists");
//         }
        
//         if (userRepository.existsByEmail(request.getEmail())) {
//             throw new RuntimeException("Email already exists");
//         }
        
//         User user = new User();
//         user.setUsername(request.getUsername());
//         user.setEmail(request.getEmail());
//         user.setPassword(passwordEncoder.encode(request.getPassword()));
//         user.setPhone(request.getPhone());
        
//         User savedUser = userRepository.save(user);
        
//         // Create wallet for user
//         Wallet wallet = new Wallet();
//         wallet.setUser(savedUser);
//         wallet.setBalance(BigDecimal.ZERO);
//         walletRepository.save(wallet);
        
//         // Create default bank details
//         BankDetails bankDetails = new BankDetails();
//         bankDetails.setUser(savedUser);
//         bankDetails.setBankName("State Bank of India");
//         bankDetails.setAccountNumber("XXXX-XXXX-1234");
//         bankDetails.setIfscCode("SBIN0001234");
//         bankDetails.setAccountType("Savings");
        
//         return savedUser;
//     }
    
//     public User authenticateUser(String username, String password) {
//         User user = userRepository.findByUsername(username)
//             .orElseThrow(() -> new RuntimeException("User not found"));
        
//         if (!passwordEncoder.matches(password, user.getPassword())) {
//             throw new RuntimeException("Invalid password");
//         }
        
//         return user;
//     }
    
//     public User getUserById(Long id) {
//         return userRepository.findById(id)
//             .orElseThrow(() -> new RuntimeException("User not found"));
//     }
// }




package com.gigshield.service;

import com.gigshield.dto.SignupRequest;
import com.gigshield.model.User;
import com.gigshield.model.Wallet;
import com.gigshield.repository.UserRepository;
import com.gigshield.repository.WalletRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.math.BigDecimal;

@Service
public class UserService {
    
    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private WalletRepository walletRepository;
    
    public User registerUser(SignupRequest request) {
        if (userRepository.existsByUsername(request.getUsername())) {
            throw new RuntimeException("Username already exists");
        }
        
        User user = new User();
        user.setUsername(request.getUsername());
        user.setEmail(request.getEmail());
        user.setPassword(request.getPassword());
        user.setPhone(request.getPhone());
        
        User savedUser = userRepository.save(user);
        
        Wallet wallet = new Wallet();
        wallet.setUser(savedUser);
        walletRepository.save(wallet);
        
        return savedUser;
    }
    
    public User authenticateUser(String username, String password) {
        User user = userRepository.findByUsername(username)
            .orElseThrow(() -> new RuntimeException("User not found"));
        
        if (!user.getPassword().equals(password)) {
            throw new RuntimeException("Invalid password");
        }
        
        return user;
    }
    
    public User getUserByUsername(String username) {
        return userRepository.findByUsername(username)
            .orElseThrow(() -> new RuntimeException("User not found"));
    }
}