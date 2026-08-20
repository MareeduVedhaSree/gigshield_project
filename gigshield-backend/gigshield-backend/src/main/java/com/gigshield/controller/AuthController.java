// package com.gigshield.controller;

// import com.gigshield.dto.LoginRequest;
// import com.gigshield.dto.SignupRequest;
// import com.gigshield.dto.ApiResponse;
// import com.gigshield.model.User;
// import com.gigshield.service.UserService;
// import com.gigshield.security.JwtUtil;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.*;
// import java.util.HashMap;
// import java.util.Map;

// @RestController
// @RequestMapping("/api/auth")
// @CrossOrigin(origins = "http://localhost:3001")
// public class AuthController {
    
//     @Autowired
//     private UserService userService;
    
//     @Autowired
//     private JwtUtil jwtUtil;
    
//     @PostMapping("/login")
//     public ApiResponse login(@RequestBody LoginRequest request) {
//         try {
//             User user = userService.authenticateUser(request.getUsername(), request.getPassword());
//             String token = jwtUtil.generateToken(user.getUsername());
            
//             Map<String, Object> response = new HashMap<>();
//             response.put("token", token);
//             response.put("userId", user.getId());
//             response.put("username", user.getUsername());
//             response.put("email", user.getEmail());
            
//             return ApiResponse.success("Login successful", response);
//         } catch (Exception e) {
//             return ApiResponse.error(e.getMessage());
//         }
//     }
    
//     @PostMapping("/signup")
//     public ApiResponse signup(@RequestBody SignupRequest request) {
//         try {
//             User user = userService.registerUser(request);
//             String token = jwtUtil.generateToken(user.getUsername());
            
//             Map<String, Object> response = new HashMap<>();
//             response.put("token", token);
//             response.put("userId", user.getId());
//             response.put("username", user.getUsername());
//             response.put("email", user.getEmail());
            
//             return ApiResponse.success("Signup successful", response);
//         } catch (Exception e) {
//             return ApiResponse.error(e.getMessage());
//         }
//     }
// }





package com.gigshield.controller;

import com.gigshield.dto.LoginRequest;
import com.gigshield.dto.SignupRequest;
import com.gigshield.dto.ApiResponse;
import com.gigshield.model.User;
import com.gigshield.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3001")
public class AuthController {
    
    @Autowired
    private UserService userService;
    
    @PostMapping("/signup")
    public ApiResponse signup(@RequestBody SignupRequest request) {
        try {
            User user = userService.registerUser(request);
            Map<String, Object> response = new HashMap<>();
            response.put("id", user.getId());
            response.put("username", user.getUsername());
            response.put("email", user.getEmail());
            return ApiResponse.success("Signup successful", response);
        } catch (Exception e) {
            return ApiResponse.error(e.getMessage());
        }
    }
    
    @PostMapping("/login")
    public ApiResponse login(@RequestBody LoginRequest request) {
        try {
            User user = userService.authenticateUser(request.getUsername(), request.getPassword());
            Map<String, Object> response = new HashMap<>();
            response.put("id", user.getId());
            response.put("username", user.getUsername());
            response.put("email", user.getEmail());
            return ApiResponse.success("Login successful", response);
        } catch (Exception e) {
            return ApiResponse.error(e.getMessage());
        }
    }
}