package com.gigshield;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication(scanBasePackages = "com.gigshield")
@EntityScan(basePackages = "com.gigshield.model")
@EnableJpaRepositories(basePackages = "com.gigshield.repository")
public class GigshieldBackendApplication {
    public static void main(String[] args) {
        SpringApplication.run(GigshieldBackendApplication.class, args);
        System.out.println("========================================");
        System.out.println("🚀 GigShield Backend Started!");
        System.out.println("📌 API: http://localhost:9999");
        System.out.println("========================================");
    }
}