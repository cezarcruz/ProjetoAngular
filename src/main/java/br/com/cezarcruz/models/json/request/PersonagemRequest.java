package br.com.cezarcruz.models.json.request;

import br.com.cezarcruz.models.Personagem;
import org.hibernate.validator.constraints.NotEmpty;

import javax.validation.constraints.NotNull;

/**
 * Created by cezar on 28/04/15.
 */
public class PersonagemRequest {

    //Nao precisa de validaçao.
    private Long id;

    @NotEmpty(message = "O nome não pode ser vazio")
    private String nome;

    @NotEmpty(message = "O sobrenome não pode ser vazio")
    private String sobrenome;

    @NotNull(message = "A idade deve ser preenchida")
    private Integer idade;

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

    /**
     * Retorna um objeto personagem.
     * @return
     */
    public Personagem getPersonagem() {
        return new Personagem(this.getId(), this.getNome(), this.getSobrenome(), this.getIdade());
    }
}
