package br.com.cezarcruz.controllers;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Locale;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import br.com.cezarcruz.exception.BusinessException;
import br.com.cezarcruz.models.Seriado;
import br.com.cezarcruz.models.json.request.MultiPartFileUpload;
import br.com.cezarcruz.models.json.request.SeriadoRequest;
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
	
	/**
	 * Responde a chamada do /add
	 * @param request objeto com os dados que serão inseridos
	 * @param result resultado da validação
	 * @return retorna sucesso.
	 * @throws BusinessException 
	 * @throws Exception 
	 */
	@RequestMapping(value = "/add", method = RequestMethod.POST)//TODO: trocar para um PUT
	public Seriado insert(@Valid @RequestBody SeriadoRequest request,
			BindingResult result,
			Locale locale) throws BusinessException {
		
		if (result.hasErrors()) {
			throw new BusinessException(result.getAllErrors());
		}
		
		repository.save(request.getSeriado());
		return request.getSeriado();
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
	
	/**
	 * Deleta um seriado by ID
	 * @param id
	 */
	@RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)//TODO Arrumar isso.
	public void delete(HttpServletRequest request, @PathVariable("id") String id) {//TODO: ajustar para a forma correta
		repository.delete(Long.parseLong(id));
	}
	
	/**
	 * Atualizar um seriado
	 * @param request
	 * @param result
	 * @param locale
	 * @throws BusinessException
	 */
	@RequestMapping(value = "/update", method = RequestMethod.PUT)
	public void update(@Valid @RequestBody SeriadoRequest request, 
						BindingResult result,
						Locale locale) throws BusinessException {

		if (result.hasErrors()) {
			throw new BusinessException(result.getAllErrors());
		}
		
		repository.save(request.getSeriado());
	}
	
	@RequestMapping(value = "/upload", method=RequestMethod.POST)
	public @ResponseBody List<String> handleFileUpload(MultiPartFileUpload file, BindingResult bindingResult, Model model) {
		if (file.getFiles().isEmpty()) {
			try {
				List<String> result = new ArrayList<String>();
				for (MultipartFile f : file.getFiles()) {
					result.add(f.getName());
				}
				return result;
			} catch (Exception ex) {
				ex.printStackTrace();
			}
		}
		
		return null;
	}
	
}
