package br.com.cezarcruz.web.json;

import br.com.cezarcruz.data.models.Character;

/**
 * Created by cezar on 28/04/15.
 */
public class CharacterRequest {

    private Long id;
    private String name;
    private String surname;
    private Integer age;
    private String photo;

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

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

    public Character toCharacter() {
        return new Character(this.getId(), this.getName(), this.getSurname(), this.getAge(), this.getPhoto());
    }
}
