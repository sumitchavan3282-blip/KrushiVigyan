package com.krushivigyan.model;

import jakarta.persistence.*;

@Entity
@Table(name = "calculations")
public class Calculation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String email;

    private String farmerName;

    private String crop;

    private Double area;

    private Double seed;

    private Double fertilizer;

    private Double pesticide;

    private Double labour;

    private Double tractor;

    private Double water;

    private Double other;

    private Double production;

    private Double price;

    private Double totalExpense;

    private Double totalIncome;

    private Double profitLoss;


    public Calculation() {
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }


    public String getFarmerName() {
        return farmerName;
    }

    public void setFarmerName(String farmerName) {
        this.farmerName = farmerName;
    }


    public String getCrop() {
        return crop;
    }

    public void setCrop(String crop) {
        this.crop = crop;
    }


    public Double getArea() {
        return area;
    }

    public void setArea(Double area) {
        this.area = area;
    }


    public Double getSeed() {
        return seed;
    }

    public void setSeed(Double seed) {
        this.seed = seed;
    }


    public Double getFertilizer() {
        return fertilizer;
    }

    public void setFertilizer(Double fertilizer) {
        this.fertilizer = fertilizer;
    }


    public Double getPesticide() {
        return pesticide;
    }

    public void setPesticide(Double pesticide) {
        this.pesticide = pesticide;
    }


    public Double getLabour() {
        return labour;
    }

    public void setLabour(Double labour) {
        this.labour = labour;
    }


    public Double getTractor() {
        return tractor;
    }

    public void setTractor(Double tractor) {
        this.tractor = tractor;
    }


    public Double getWater() {
        return water;
    }

    public void setWater(Double water) {
        this.water = water;
    }


    public Double getOther() {
        return other;
    }

    public void setOther(Double other) {
        this.other = other;
    }


    public Double getProduction() {
        return production;
    }

    public void setProduction(Double production) {
        this.production = production;
    }


    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }


    public Double getTotalExpense() {
        return totalExpense;
    }

    public void setTotalExpense(Double totalExpense) {
        this.totalExpense = totalExpense;
    }


    public Double getTotalIncome() {
        return totalIncome;
    }

    public void setTotalIncome(Double totalIncome) {
        this.totalIncome = totalIncome;
    }


    public Double getProfitLoss() {
        return profitLoss;
    }

    public void setProfitLoss(Double profitLoss) {
        this.profitLoss = profitLoss;
    }
}