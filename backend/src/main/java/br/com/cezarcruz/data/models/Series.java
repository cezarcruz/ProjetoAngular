package br.com.cezarcruz.data.models;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Series {

	@Id @GeneratedValue(strategy = GenerationType.AUTO)
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

	public Series(final String name, 
				  final Integer season, Long id) {
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

	public void setName(final String name) {
		this.name = name;
	}

	public Integer getSeason() {
		return season;
	}

	public void setSeason(final Integer season) {
		this.season = season;
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
