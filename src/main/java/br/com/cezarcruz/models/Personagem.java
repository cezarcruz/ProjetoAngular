package br.com.cezarcruz.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * Created by cezar on 28/04/15.
 */
@Entity
public class Personagem {

    @Id @GeneratedValue
    private Long id;
    private String nome;
    private String sobrenome;
    private Integer idade;

    /**
     * Construtor.
     * @param id
     * @param nome
     * @param sobrenome
     * @param idade
     */
    public Personagem(Long id, String nome, String sobrenome, Integer idade) {
        this.id = id;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getSobrenome() {
        return sobrenome;
    }

    public void setSobrenome(String sobrenome) {
        this.sobrenome = sobrenome;
    }

    public Integer getIdade() {
        return idade;
    }

    public void setIdade(Integer idade) {
        this.idade = idade;
    }
}
