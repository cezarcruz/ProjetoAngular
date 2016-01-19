package br.com.cezarcruz.web.controllers;

import br.com.cezarcruz.data.models.Character;
import br.com.cezarcruz.data.repositories.CharacterRepository;
import br.com.cezarcruz.exception.BusinessException;
import br.com.cezarcruz.web.json.CharacterRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
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
     * @throws BusinessException
     */
    @RequestMapping(method = RequestMethod.POST)
    public void insert(@RequestParam("file") MultipartFile file,
                       @RequestParam("name") String name,
                       @RequestParam("surname") String surname,
                       @RequestParam("age") Integer age) throws BusinessException {

        if (!file.isEmpty()) {
            try {
                byte[] bytes = file.getBytes();
                String rootPath = System.getProperty("catalina.home");
                File dir = new File(rootPath + File.separator + "tmpFiles");

                if (!dir.exists()) {
                    dir.mkdirs();
                }

                File serveFile = new File(dir.getAbsolutePath() + File.separator + file.getOriginalFilename());
                BufferedOutputStream stream = new BufferedOutputStream(new FileOutputStream(serveFile));
                stream.write(bytes);
                stream.close();

                CharacterRequest characterRequest = new CharacterRequest();
                characterRequest.setAge(age);
                characterRequest.setName(name);
                characterRequest.setSurname(surname);
                characterRequest.setPhoto(serveFile.getAbsolutePath());

                characterRepository.save(characterRequest.toCharacter());

            } catch (Exception ex) {
                System.out.println("Error");
            }
        }
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
