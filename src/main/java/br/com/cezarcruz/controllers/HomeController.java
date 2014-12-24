package br.com.cezarcruz.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.cezarcruz.models.Personagem;

@RestController
public class HomeController {
	
	@RequestMapping("/oi")
	public Personagem oi() {
		return new Personagem("Jhon", "Ninja");
	}
}
