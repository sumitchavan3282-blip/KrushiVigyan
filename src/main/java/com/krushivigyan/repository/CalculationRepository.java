package com.krushivigyan.repository;

import com.krushivigyan.model.Calculation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CalculationRepository extends JpaRepository<Calculation, Long> {

    List<Calculation> findByEmail(String email);
}