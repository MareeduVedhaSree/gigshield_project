// package com.gigshield.controller;

// import com.gigshield.dto.ApiResponse;
// import com.gigshield.model.User;
// import com.gigshield.model.Wallet;
// import com.gigshield.service.WalletService;
// import com.gigshield.service.UserService;
// import com.gigshield.security.JwtUtil;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.*;
// import java.math.BigDecimal;
// import java.util.HashMap;
// import java.util.Map;

// @RestController
// @RequestMapping("/api/wallet")
// @CrossOrigin(origins = "http://localhost:3001")
// public class WalletController {
    
//     @Autowired
//     private WalletService walletService;
    
//     @Autowired
//     private UserService userService;
    
//     @Autowired
//     private JwtUtil jwtUtil;
    
//     @GetMapping("/balance")
//     public ApiResponse getBalance(@RequestHeader("Authorization") String token) {
//         try {
//             String username = jwtUtil.extractUsername(token.substring(7));
//             User user = userService.authenticateUser(username, "");
            
//             Wallet wallet = walletService.getWalletByUser(user);
            
//             Map<String, Object> response = new HashMap<>();
//             response.put("balance", wallet.getBalance());
//             response.put("transactions", wallet.getTransactions());
            
//             return ApiResponse.success("Balance retrieved", response);
//         } catch (Exception e) {
//             return ApiResponse.error(e.getMessage());
//         }
//     }
    
//     @PostMapping("/add-funds")
//     public ApiResponse addFunds(
//             @RequestHeader("Authorization") String token,
//             @RequestParam BigDecimal amount) {
//         try {
//             String username = jwtUtil.extractUsername(token.substring(7));
//             User user = userService.authenticateUser(username, "");
            
//             Wallet wallet = walletService.addFunds(user, amount, "Added funds");
            
//             return ApiResponse.success("Funds added successfully", wallet);
//         } catch (Exception e) {
//             return ApiResponse.error(e.getMessage());
//         }
//     }
// }





package com.gigshield.controller;

import com.gigshield.dto.ApiResponse;
import com.gigshield.model.User;
import com.gigshield.service.WalletService;
import com.gigshield.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/wallet")
@CrossOrigin(origins = "http://localhost:3001")
public class WalletController {
    
    @Autowired
    private WalletService walletService;
    
    @Autowired
    private UserService userService;
    
    @GetMapping("/balance")
    public ApiResponse getBalance(@RequestParam String username) {
        try {
            User user = userService.getUserByUsername(username);
            var walletData = walletService.getWalletWithTransactions(user);
            return ApiResponse.success("Balance retrieved", walletData);
        } catch (Exception e) {
            return ApiResponse.error(e.getMessage());
        }
    }
}