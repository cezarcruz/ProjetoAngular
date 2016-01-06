package br.com.cezarcruz.data.repositories;

import br.com.cezarcruz.data.models.Persona;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by cezar on 28/04/15.
 */
public interface CharacterRepository extends CrudRepository<Persona, Long> {
}
