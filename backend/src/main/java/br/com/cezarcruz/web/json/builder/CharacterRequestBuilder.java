package br.com.cezarcruz.web.json.builder;

import br.com.cezarcruz.web.json.CharacterRequest;

public class CharacterRequestBuilder {

    private Long id;
    private String name;
    private String surname;
    private Integer age;
    private String photo;

    public CharacterRequestBuilder id(final Long id) {
        this.id = id;
        return this;
    }

    public CharacterRequestBuilder name(final String name) {
        this.name = name;
        return this;
    }

    public CharacterRequestBuilder surname(final String surname) {
        this.surname = surname;
        return this;
    }

    public CharacterRequestBuilder age(final Integer age) {
        this.age = age;
        return this;
    }

    public CharacterRequestBuilder photo(final String photo) {
        this.photo = photo;
        return this;
    }

    public CharacterRequest build() {
        return new CharacterRequest(id, name, surname, age, photo);
    }
}