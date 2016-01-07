package br.com.cezarcruz.web.controllers;

import br.com.cezarcruz.data.models.Character;
import br.com.cezarcruz.data.repositories.CharacterRepository;
import br.com.cezarcruz.exception.BusinessException;
import br.com.cezarcruz.web.json.CharacterRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

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
     * @throws BusinessException
     */
    @RequestMapping(method = RequestMethod.POST)
    public void insert(@Valid @RequestBody final CharacterRequest characterRequest,
                        final BindingResult result) throws BusinessException {
        
        if (result.hasErrors()) {
            throw new BusinessException(result.getAllErrors());
        }

        characterRepository.save(characterRequest.toCharacter());
    }

    @RequestMapping(value="/list", method = RequestMethod.GET)
    public List<Character> getAll() {
        return characterRepository.findAll();
    }

    @RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable("id") final  String id) {
        characterRepository.delete(Long.parseLong(id));
    }
}
