package br.com.cezarcruz.web.json;

import br.com.cezarcruz.data.models.Series;

public class SeriesRequest {

	private Long id;
	private String name;
	private Integer season;

	public Long getId() {
		return id;
	}

	public void setId(final Long id) {
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

	public Series toSeries() {
		return new Series(this.getName(), this.getSeason(), this.getId());
	}
}
