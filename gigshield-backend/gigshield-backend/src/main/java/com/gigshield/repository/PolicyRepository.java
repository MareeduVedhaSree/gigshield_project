package com.gigshield.repository;

import com.gigshield.model.InsurancePolicy;
import com.gigshield.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;

@Repository
public interface PolicyRepository extends JpaRepository<InsurancePolicy, Long> {
    List<InsurancePolicy> findByUser(User user);
    Optional<InsurancePolicy> findByUserAndStatus(User user, String status);
}