package br.com.cezarcruz.service;

import javax.inject.Inject;
import javax.transaction.Transactional;

import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

import br.com.cezarcruz.domain.Seriado;
import br.com.cezarcruz.domain.SeriadoRepository;

@Service
@Validated
public class SeriadoServiceImpl implements SeriadoService {

    private final SeriadoRepository repository;

    @Override
    @Transactional
    public Seriado save(Seriado s) {
        return this.repository.save(s);
    }

    @Inject
    public SeriadoServiceImpl(final SeriadoRepository repository) {
        this.repository = repository;
    }

}
