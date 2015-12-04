package br.com.cezarcruz.web.controllers;

import br.com.cezarcruz.exception.BusinessException;
import br.com.cezarcruz.web.json.CharacterRequest;
import br.com.cezarcruz.data.repositories.CharacterRepository;
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
@RequestMapping(value = "/characters")
public class CharacterController {

    @Autowired
    private CharacterRepository characterRepository;

    /**
     * Controller que insere um novo personagem
     * @param characterRequest
     * @param result
     * @param locale
     * @throws BusinessException
     */
    @RequestMapping(method = RequestMethod.POST)
    public void insert(@Valid @RequestBody CharacterRequest characterRequest,
                        BindingResult result, 
                        Locale locale) throws BusinessException {
        
        if (result.hasErrors()) {
            throw new BusinessException(result.getAllErrors());
        }

        characterRepository.save(characterRequest.toSeries());
    }

}
