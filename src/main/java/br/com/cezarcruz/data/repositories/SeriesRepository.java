package br.com.cezarcruz.data.repositories;

import org.springframework.data.repository.CrudRepository;

import br.com.cezarcruz.data.models.Series;

public interface SeriesRepository extends CrudRepository<Series, Long> {
	
}
