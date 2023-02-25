package com.job_offer.services;
import com.job_offer.repository.OfferRepository;
import com.job_offer.models.Offer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

@Service
public class OfferService {
    private final OfferRepository offerRepository;

    @Autowired
    public OfferService(OfferRepository offerRepository) {
        this.offerRepository = offerRepository;
    }
    public List<Offer> getAllOffer(){
        return offerRepository.findAll();
    }

    public void addNewOffer(Offer offer){
        Optional<Offer> offerOptional = offerRepository.findById(offer.getId());
        if (offerOptional.isPresent()){
            throw new IllegalStateException("offer existant");
        }
        offerRepository.save(offer);
    }
    public void deleteOffer(Long offerId){
        boolean exists = offerRepository.existsById(offerId);
        if (!exists){
            throw new IllegalStateException("offer with id"+ offerId+" does not exist");
        }
        offerRepository.deleteById(offerId);
    }
    @Transactional
    public void updateOffer(Long offerId, String name, String description, String type, String location, String company, Date duration, boolean status, String data_post) {
        Offer offer = offerRepository.findById(offerId).orElseThrow(() -> new IllegalStateException("offer with "+offerId+" does not exist"));
        if (name != null && name.length()>0 && !Objects.equals(offer.getName(), name)){
            offer.setName(name);
        }

        if (description != null && description.length()>0 && !Objects.equals(offer.getDescription(), description)&&
                type!= null && type.length()>0 && !Objects.equals(offer.getType(), type)&&
                location!=null &&location.length()>0 &&!Objects.equals(offer.getLocation(), location)&&
                company!=null && company.length()>0 &&!Objects.equals(offer.getCompany(), company)&&
                data_post!=null && data_post.length()>0 &&!Objects.equals(offer.getData_post(), data_post)){
            Optional<Offer> offerOptional = offerRepository.findById(offerId);
            if (offerOptional.isPresent()){
                throw new IllegalStateException("Id taken");
            }
            offer.setDescription(description);
            offer.setCompany(company);
            offer.setType(type);
            offer.setName(name);
            offer.setDuration(duration);
            offer.setData_post(data_post);
            offer.setLocation(location);
        }
    }
}

