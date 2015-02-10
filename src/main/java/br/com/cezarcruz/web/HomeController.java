package br.com.cezarcruz.web;

import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.com.cezarcruz.domain.Personagem;
import br.com.cezarcruz.service.PersonagemService;

@RestController
@RequestMapping(value = "/home")
public class HomeController {

    private static final Logger LOGGER = LoggerFactory.getLogger(HomeController.class);
    private final PersonagemService personagemService;

    @Inject
    public HomeController(final PersonagemService personagemService) {
        this.personagemService = personagemService;
    }

    @RequestMapping("/oi")
    public Personagem oi() {
        return new Personagem("Jhon", "Ninja");
    }

    @RequestMapping(method = RequestMethod.POST, value = "/post", consumes = {"application/json"})
    @ResponseStatus(HttpStatus.OK)
    public @ResponseBody
    HttpStatus teste(@RequestBody Personagem p,
            HttpServletRequest request, HttpServletResponse response) {
        return HttpStatus.OK;
    }

    @RequestMapping(method = RequestMethod.POST, value = "/tratastr", consumes = {"application/json"})
    @ResponseStatus(HttpStatus.OK)
    public @ResponseBody
    String toUpper(@RequestBody Personagem p,
            HttpServletRequest request, HttpServletResponse response) {
        personagemService.save(p);
        LOGGER.info("Personagem salvo com sucesso");
        return p.toUpperString();
    }
}
