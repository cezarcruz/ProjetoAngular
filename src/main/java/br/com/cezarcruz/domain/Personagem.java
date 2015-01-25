package br.com.cezarcruz.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.TableGenerator;

@Entity
public class Personagem {

	@Id
	@TableGenerator(name = "TABLE_GENERATOR", table = "SEQUENCE_TABLE", pkColumnName = "TABLE_NAME", pkColumnValue = "PERSONAGEM_ID", valueColumnName = "TABLE_VALUE", allocationSize = 1)
	@GeneratedValue(strategy = GenerationType.TABLE, generator = "TABLE_GENERATOR")
	private long id;

	private String nome;
	private String tipo;
	
	@ManyToOne
	private Seriado seriado;

	/**
	 * Construtor simple, utilizado para quando o post receber um objeto via
	 * json!
	 */
	public Personagem() {
		// NADA aqui
	}

	public Personagem(String nome, String tipo) {
		this.nome = nome;
		this.tipo = tipo;
	}
	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public Seriado getSeriado() {
		return seriado;
	}

	public void setSeriado(Seriado seriado) {
		this.seriado = seriado;
	}

	public String toUpperString() {
		return String.format("{\"name\" : \"%s\", \"type\" : \"%s\"}", this
				.getNome().toUpperCase(), this.getTipo().toUpperCase());
	}

}
