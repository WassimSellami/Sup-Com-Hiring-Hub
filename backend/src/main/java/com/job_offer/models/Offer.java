package com.job_offer.models;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Table(name = "offer")
public class Offer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Size(max = 200)
    private String name;

    @NotBlank
    private String description;

    @NotBlank
    @Size(max = 50)
    private String type; // enumerate

    @NotBlank
    @Size(max = 120)
    private String location;

    @NotBlank
    @Size(max = 120)
    private String company;

    @NotBlank
    private Date duration;

    @NotBlank
    @Size(max = 120)
    private String data_post;

    @NotBlank
    @Size(max = 120)
    private String occupation;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(  name = "user_roles",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<Role> roles = new HashSet<>();

    public Offer() {
    }

    public Offer(Long id, String name, String description, String type, String location, String company, Date duration, String data_post, String occupation, Set<Role> roles) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.type = type;
        this.location = location;
        this.company = company;
        this.duration = duration;
        this.data_post = data_post;
        this.occupation = occupation;
        this.roles = roles;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public Date getDuration() {
        return duration;
    }

    public void setDuration(Date duration) {
        this.duration = duration;
    }

    public String getData_post() {
        return data_post;
    }

    public void setData_post(String data_post) {
        this.data_post = data_post;
    }

    public String getOccupation() {
        return occupation;
    }

    public void setOccupation(String occupation) {
        this.occupation = occupation;
    }

    public Set<Role> getRoles() {
        return roles;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }


}
