package br.com.cezarcruz.web.controllers;

import br.com.cezarcruz.data.models.Character;
import br.com.cezarcruz.data.models.ErrorInfo;
import br.com.cezarcruz.data.repositories.CharacterRepository;
import br.com.cezarcruz.exception.BusinessException;
import br.com.cezarcruz.services.FileService;
import br.com.cezarcruz.web.json.CharacterRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

/**
 * Created by cezar on 28/04/15.
 */
@RestController
@RequestMapping(value = "/characters")
public class CharacterController {

	private static final Logger LOGGER = LoggerFactory.getLogger(CharacterController.class);
	
    @Autowired
    private CharacterRepository characterRepository;

    @Autowired
    private FileService fileService;

    /**
     * Controller que insere um novo personagem
     * @throws BusinessException
     */
    @RequestMapping(method = RequestMethod.POST)
    public void insert(@RequestParam("file") final MultipartFile file,
                       @RequestParam("name") final String name,
                       @RequestParam("surname") final String surname,
                       @RequestParam("age") final Integer age) throws BusinessException {

    	LOGGER.info("init controller CharacterController::insert");
    	
        try {
        	
            final CharacterRequest characterRequest = new CharacterRequest();
            characterRequest.setAge(age);
            characterRequest.setName(name);
            characterRequest.setSurname(surname);
            characterRequest.setPhoto(fileService.saveFile(file));

            characterRepository.save(characterRequest.toCharacter());
        } catch (IOException ioEx) {
            //TODO: remove this detailed ex.
            ErrorInfo ef = new ErrorInfo("000", ioEx.getMessage());
            throw new BusinessException(ef);
        }
        
    	LOGGER.info("ending controller CharacterController::insert");
    }

    @RequestMapping(value="/list", method = RequestMethod.GET)
    public List<Character> getAll() {
        return characterRepository.findAll();
    }

    @RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable("id") final String id) {
        characterRepository.delete(Long.parseLong(id));
    }
}
