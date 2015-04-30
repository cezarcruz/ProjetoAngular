package br.com.cezarcruz.controllers;

import br.com.cezarcruz.exception.BusinessException;
import br.com.cezarcruz.models.json.request.PersonagemRequest;
import br.com.cezarcruz.repository.PersonagemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.Locale;

/**
 * Created by cezar on 28/04/15.
 */
@RestController
@RequestMapping(value = "/personagens")
public class PersonagemController {

    @Autowired
    private PersonagemRepository personagemRepository;

    /**
     * Controller que insere um novo personagem
     * @param personagemRequest
     * @param result
     * @param locale
     * @throws BusinessException
     */
    @RequestMapping(value="/add", method = RequestMethod.POST)
    public void insert(@Valid @RequestBody PersonagemRequest personagemRequest, 
                        BindingResult result, 
                        Locale locale) throws BusinessException {
        
        if (result.hasErrors()) {
            throw new BusinessException(result.getAllErrors());
        }

        personagemRepository.save(personagemRequest.getPersonagem());
    }

}
