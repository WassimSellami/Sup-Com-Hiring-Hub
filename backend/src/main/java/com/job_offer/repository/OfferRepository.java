package com.job_offer.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.job_offer.models.Offer;

@Repository
public interface OfferRepository extends JpaRepository<Offer, Long> {
}
