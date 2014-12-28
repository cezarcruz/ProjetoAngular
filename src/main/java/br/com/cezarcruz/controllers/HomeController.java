package br.com.cezarcruz.controllers;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.com.cezarcruz.models.Personagem;

@RestController
@RequestMapping(value = "/home")
public class HomeController {
	
	
	@RequestMapping("/oi")
	public Personagem oi() {
		return new Personagem("Jhon", "Ninja");
	}
	
	@RequestMapping(method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody HttpStatus teste( @RequestBody Personagem p, HttpServletRequest request, HttpServletResponse response) {
		System.out.println(p.getname());
		return HttpStatus.OK;
	}
}
