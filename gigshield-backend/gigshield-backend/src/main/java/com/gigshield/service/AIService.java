package com.gigshield.service;

import org.springframework.stereotype.Service;
import java.math.BigDecimal;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;

@Service
public class AIService {
    
    private final Random random = new Random();
    
    public BigDecimal analyzeEarningsScreenshot(byte[] imageData) {
        // Simulate AI analysis of earnings screenshot
        // In production, this would call an actual ML model or OCR service
        int minEarnings = 3000;
        int maxEarnings = 15000;
        int earnings = random.nextInt(maxEarnings - minEarnings + 1) + minEarnings;
        return BigDecimal.valueOf(earnings);
    }
    
    public Map<String, Object> calculateRiskAndPremium(BigDecimal weeklyEarnings) {
        Map<String, Object> result = new HashMap<>();
        
        BigDecimal dailyIncome = weeklyEarnings.divide(BigDecimal.valueOf(6), 0, BigDecimal.ROUND_HALF_UP);
        BigDecimal coverage = dailyIncome.multiply(BigDecimal.valueOf(0.6));
        
        String riskLevel;
        BigDecimal weeklyPremium;
        
        if (dailyIncome.compareTo(BigDecimal.valueOf(800)) < 0) {
            riskLevel = "LOW";
            weeklyPremium = BigDecimal.valueOf(30);
        } else if (dailyIncome.compareTo(BigDecimal.valueOf(1200)) > 0) {
            riskLevel = "HIGH";
            weeklyPremium = BigDecimal.valueOf(79);
        } else {
            riskLevel = "MEDIUM";
            weeklyPremium = BigDecimal.valueOf(49);
        }
        
        result.put("dailyIncome", dailyIncome);
        result.put("coverage", coverage);
        result.put("riskLevel", riskLevel);
        result.put("weeklyPremium", weeklyPremium);
        result.put("weeklyEarnings", weeklyEarnings);
        
        return result;
    }
    
    public Map<String, Object> getRecommendedPlans(Map<String, Object> riskAnalysis) {
        Map<String, Object> plans = new HashMap<>();
        
        BigDecimal weeklyPremium = (BigDecimal) riskAnalysis.get("weeklyPremium");
        BigDecimal coverage = (BigDecimal) riskAnalysis.get("coverage");
        
        // Basic Plan
        Map<String, Object> basicPlan = new HashMap<>();
        basicPlan.put("name", "Basic");
        basicPlan.put("premium", weeklyPremium);
        basicPlan.put("coverage", coverage);
        basicPlan.put("features", new String[]{"60% income protection", "Parametric triggers", "Auto-payout"});
        
        // Standard Plan
        Map<String, Object> standardPlan = new HashMap<>();
        standardPlan.put("name", "Standard");
        standardPlan.put("premium", weeklyPremium.multiply(BigDecimal.valueOf(1.2)));
        standardPlan.put("coverage", coverage.multiply(BigDecimal.valueOf(1.17)));
        standardPlan.put("features", new String[]{"70% income protection", "Priority support", "Faster payouts"});
        
        // Premium Plan
        Map<String, Object> premiumPlan = new HashMap<>();
        premiumPlan.put("name", "Premium");
        premiumPlan.put("premium", weeklyPremium.multiply(BigDecimal.valueOf(1.5)));
        premiumPlan.put("coverage", coverage.multiply(BigDecimal.valueOf(1.33)));
        premiumPlan.put("features", new String[]{"80% income protection", "Family coverage", "Wellness benefits"});
        
        plans.put("basic", basicPlan);
        plans.put("standard", standardPlan);
        plans.put("premium", premiumPlan);
        
        return plans;
    }
}