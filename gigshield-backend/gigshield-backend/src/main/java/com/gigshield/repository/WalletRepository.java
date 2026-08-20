// package com.gigshield.repository;

// import com.gigshield.model.Wallet;
// import com.gigshield.model.User;
// import org.springframework.data.jpa.repository.JpaRepository;
// import org.springframework.stereotype.Repository;
// import java.util.Optional;

// @Repository
// public interface WalletRepository extends JpaRepository<Wallet, Long> {
//     Optional<Wallet> findByUser(User user);
// }


package com.gigshield.repository;

import com.gigshield.model.Wallet;
import com.gigshield.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface WalletRepository extends JpaRepository<Wallet, Long> {
    Optional<Wallet> findByUser(User user);
}