package br.com.cezarcruz.data.models;

import javax.persistence.*;
import java.util.Date;


/**
 * Representing a character, maybe change for another name.
 */
@Entity
@Table(name = "persona")
public class Character {

    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    private String surname;
    private Integer age;
    private String photo;

    @Column(name = "created_at")
    public Date createdAt;

    @Column(name = "updated_at")
    public Date updatedAt;

    public Character(){}

    public Character(final Long id, 
    				 final String name, 
    				 final String surname, 
    				 final Integer age, 
    				 final String photo) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.photo = photo;
    }

    public Long getId() {
        return id;
    }

    public void setId(final Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(final String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(final String surname) {
        this.surname = surname;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(final Integer age) {
        this.age = age;
    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(final String photo) {
        this.photo = photo;
    }

    @PrePersist
    public void createdAt() {
        this.createdAt = this.updatedAt = new Date();
    }

    @PreUpdate
    public void updatedAt() {
        this.updatedAt = new Date();
    }
}
