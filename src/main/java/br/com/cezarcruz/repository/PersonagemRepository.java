package br.com.cezarcruz.repository;

import br.com.cezarcruz.models.Personagem;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by cezar on 28/04/15.
 */
public interface PersonagemRepository extends CrudRepository<Personagem, Long> {
}
