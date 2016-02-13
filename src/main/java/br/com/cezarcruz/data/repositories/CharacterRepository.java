package br.com.cezarcruz.data.repositories;

import br.com.cezarcruz.data.models.Character;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.Repository;

import java.util.List;

/**
 * Created by cezar on 28/04/15.
 */
public interface CharacterRepository extends Repository<Character, Long> {
    Character save(final Character p);
    List<Character> findAll();
    Long delete(Long id);
    List<Character> findAllByOrderByCreatedAtDesc(final Pageable pageable);
}
