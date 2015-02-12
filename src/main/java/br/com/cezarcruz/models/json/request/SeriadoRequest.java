package br.com.cezarcruz.models.json.request;

import org.hibernate.validator.constraints.NotEmpty;

import br.com.cezarcruz.models.Seriado;

/**
 * Esse é o contrato com a view.
 * @author ccruz
 *
 */
public class SeriadoRequest {
	
	@NotEmpty(message = "O nome não pode ser vazio")
	private String nome;
	
	@NotEmpty(message = "A temporada não pode ser vazia")
	private Integer temporada;

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public Integer getTemporada() {
		return temporada;
	}

	public void setTemporada(Integer temporada) {
		this.temporada = temporada;
	}
	
	/**
	 * Retorna uma instancia de seriado.
	 * @return
	 */
	public Seriado getSeriado() {
		return new Seriado(this.getNome(), this.getTemporada());
	}

}
