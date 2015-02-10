package br.com.cezarcruz.service;

import javax.inject.Inject;
import javax.transaction.Transactional;

import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

import br.com.cezarcruz.domain.Personagem;
import br.com.cezarcruz.domain.PersonagemRepository;

@Service
@Validated
public class PersonagemServiceImpl implements PersonagemService {

    private final PersonagemRepository repository;

    @Inject
    public PersonagemServiceImpl(final PersonagemRepository repository) {
        this.repository = repository;
    }

    @Override
    @Transactional
    public Personagem save(Personagem p) {
        return repository.save(p);
    }

}
