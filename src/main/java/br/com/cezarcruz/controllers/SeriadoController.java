package br.com.cezarcruz.controllers;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.cezarcruz.models.Seriado;
import br.com.cezarcruz.repository.SeriadoRepository;

@RestController
@RequestMapping(value = "/seriados")
public class SeriadoController {

	@Autowired
	private SeriadoRepository repository;
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home() {
		return "Cadastro de seriados";
	}
	
	@RequestMapping(value = "/add", method = RequestMethod.POST)//TODO: trocar para um PUT
	public @ResponseBody Seriado insert(@RequestBody Seriado seriado) {
		repository.save(seriado);
		return seriado;
	}
	
	@RequestMapping(value="/list", method = RequestMethod.GET)
	public List<Seriado> get() {
		List<Seriado> result = new ArrayList<Seriado>();
		Iterator<Seriado> iterator = repository.findAll().iterator();
		
		while(iterator.hasNext()) {
			result.add(iterator.next());
		}
		
		return result;
	}
	
}
