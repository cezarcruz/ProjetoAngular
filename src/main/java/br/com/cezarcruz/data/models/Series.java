package br.com.cezarcruz.data.models;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Series {

	@Id @GeneratedValue(strategy= GenerationType.AUTO)
	private Long id;
	private String name;
	private Integer season;

	@Column(name = "created_at")
	public Date createdAt;

	@Column(name = "updated_at")
	public Date updatedAt;

	public Series() {
        //empty
	}

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

	@PrePersist
	void createdAt() {
		this.createdAt = this.updatedAt = new Date();
	}

	@PreUpdate
	void updatedAt() {
		this.updatedAt = new Date();
	}
}
