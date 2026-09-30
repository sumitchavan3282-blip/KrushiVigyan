package com.krushivigyan.controller;

import com.krushivigyan.model.Calculation;
import com.krushivigyan.repository.CalculationRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/calculations")
public class CalculationController {

    private final CalculationRepository calculationRepository;

    public CalculationController(CalculationRepository calculationRepository) {
        this.calculationRepository = calculationRepository;
    }

    @PostMapping("/save")
    public String saveCalculation(

            @RequestParam String email,
            @RequestParam String farmerName,
            @RequestParam String crop,
            @RequestParam Double area,

            @RequestParam Double seed,
            @RequestParam Double fertilizer,
            @RequestParam Double pesticide,
            @RequestParam Double labour,
            @RequestParam Double tractor,
            @RequestParam Double water,
            @RequestParam Double other,

            @RequestParam Double production,
            @RequestParam Double price,

            @RequestParam Double totalExpense,
            @RequestParam Double totalIncome,
            @RequestParam Double profitLoss) {


        Calculation calculation = new Calculation();

        calculation.setEmail(email);

        calculation.setFarmerName(farmerName);
        calculation.setCrop(crop);
        calculation.setArea(area);

        calculation.setSeed(seed);
        calculation.setFertilizer(fertilizer);
        calculation.setPesticide(pesticide);
        calculation.setLabour(labour);
        calculation.setTractor(tractor);
        calculation.setWater(water);
        calculation.setOther(other);

        calculation.setProduction(production);
        calculation.setPrice(price);

        calculation.setTotalExpense(totalExpense);
        calculation.setTotalIncome(totalIncome);
        calculation.setProfitLoss(profitLoss);


        calculationRepository.save(calculation);


        return "Calculation saved successfully";
    }


    @GetMapping("/history/{email}")
    public List<Calculation> getHistory(
            @PathVariable String email) {

        return calculationRepository.findByEmail(email);
    }
}