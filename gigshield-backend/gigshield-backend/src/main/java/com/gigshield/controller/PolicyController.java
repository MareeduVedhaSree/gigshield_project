package com.gigshield.controller;

import com.gigshield.dto.ApiResponse;
import com.gigshield.dto.PolicyRequest;
import com.gigshield.model.User;
import com.gigshield.model.InsurancePolicy;
import com.gigshield.service.PolicyService;
import com.gigshield.service.AIService;
import com.gigshield.service.UserService;
import com.gigshield.security.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.math.BigDecimal;
import java.util.Map;

@RestController
@RequestMapping("/api/policy")
@CrossOrigin(origins = "http://localhost:3001")
public class PolicyController {
    
    @Autowired
    private PolicyService policyService;
    
    @Autowired
    private AIService aiService;
    
    @Autowired
    private UserService userService;
    
    @Autowired
    private JwtUtil jwtUtil;
    
    @PostMapping("/analyze")
    public ApiResponse analyzeEarnings(
            @RequestHeader("Authorization") String token,
            @RequestParam("screenshot") MultipartFile screenshot) {
        try {
            String username = jwtUtil.extractUsername(token.substring(7));
            User user = userService.authenticateUser(username, "");
            
            // Analyze screenshot
            BigDecimal weeklyEarnings = aiService.analyzeEarningsScreenshot(screenshot.getBytes());
            Map<String, Object> riskAnalysis = aiService.calculateRiskAndPremium(weeklyEarnings);
            Map<String, Object> plans = aiService.getRecommendedPlans(riskAnalysis);
            
            riskAnalysis.put("plans", plans);
            
            return ApiResponse.success("Analysis complete", riskAnalysis);
        } catch (Exception e) {
            return ApiResponse.error(e.getMessage());
        }
    }
    
    @PostMapping("/activate")
    public ApiResponse activatePolicy(
            @RequestHeader("Authorization") String token,
            @RequestBody PolicyRequest request) {
        try {
            String username = jwtUtil.extractUsername(token.substring(7));
            User user = userService.authenticateUser(username, "");
            
            InsurancePolicy policy = policyService.activatePolicy(user, request);
            
            return ApiResponse.success("Policy activated successfully", policy);
        } catch (Exception e) {
            return ApiResponse.error(e.getMessage());
        }
    }
    
    @GetMapping("/my-policy")
    public ApiResponse getMyPolicy(@RequestHeader("Authorization") String token) {
        try {
            String username = jwtUtil.extractUsername(token.substring(7));
            User user = userService.authenticateUser(username, "");
            
            InsurancePolicy policy = policyService.getActivePolicy(user);
            
            return ApiResponse.success("Policy retrieved", policy);
        } catch (Exception e) {
            return ApiResponse.error(e.getMessage());
        }
    }
}