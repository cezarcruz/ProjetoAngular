package br.com.cezarcruz.web.controllers;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Locale;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.cezarcruz.exception.BusinessException;
import br.com.cezarcruz.data.models.Series;
import br.com.cezarcruz.web.json.SeriesRequest;
import br.com.cezarcruz.data.repositories.SeriesRepository;

@RestController
@RequestMapping(value = "/series")
public class SeriesControler {

	@Autowired
	private SeriesRepository repository;

	/**
	 * Save a new serie
	 * @param request
	 * @param locale
	 * @return
	 * @throws BusinessException
     */
	@RequestMapping(value = "/add", method = RequestMethod.POST)//TODO: trocar para um PUT
	public void insert(@Valid @RequestBody SeriesRequest request,
						 Locale locale) throws BusinessException {
		repository.save(request.toSeries());
	}
	
	@RequestMapping(value="/list", method = RequestMethod.GET)
	public List<Series> getAll() {
		List<Series> result = new ArrayList<Series>();
		Iterator<Series> iterator = repository.findAll().iterator();
		
		while(iterator.hasNext()) {
			result.add(iterator.next());
		}
		
		return result;
	}
	
	/**
	 * Drop a serie by id
	 * @param id
	 */
	@RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)//TODO Arrumar isso.
	public void delete(@PathVariable("id") String id) {//TODO: ajustar para a forma correta
		repository.delete(Long.parseLong(id));
	}
	
	/**
	 * Update a serie
	 * @param request
	 * @param locale
	 * @throws BusinessException
	 */
	@RequestMapping(value = "/update", method = RequestMethod.PUT)
	public void update(@Valid @RequestBody SeriesRequest request,
						Locale locale) throws BusinessException {
		repository.save(request.toSeries());
	}
}
