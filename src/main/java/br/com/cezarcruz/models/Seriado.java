package br.com.cezarcruz.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Seriado {

	@Id @GeneratedValue
	private Long id;
	private String nome;
	private Integer temporada;

	public Seriado() {}

	public Seriado(String nome, Integer temporada, Long id) {
		this.nome = nome;
		this.temporada = temporada;
		this.id = id;
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

	public Integer getTemporada() {
		return temporada;
	}

	public void setTemporada(Integer temporada) {
		this.temporada = temporada;
	}

}
