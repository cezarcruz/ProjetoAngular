package br.com.cezarcruz.data.repositories;

import br.com.cezarcruz.data.models.Series;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.Repository;

import java.util.List;

public interface SeriesRepository extends Repository<Series, Long> {
    Series save(final Series s);
    List<Series> findAll();
    Long delete(final Long id);
    Series findOne(final Long id);
    List<Series> findAllByOrderByCreatedAtDesc(final Pageable pageable);
}
