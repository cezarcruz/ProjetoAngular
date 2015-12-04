package br.com.cezarcruz.data.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Series {

	@Id @GeneratedValue
	private Long id;
	private String name;
	private Integer season;

	public Series() {}

	public Series(String name, Integer season, Long id) {
		this.name = name;
		this.season = season;
		this.id = id;
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

	public Integer getSeason() {
		return season;
	}

	public void setSeason(Integer season) {
		this.season = season;
	}
}
