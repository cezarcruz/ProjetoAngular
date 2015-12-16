package br.com.cezarcruz.web.controllers;

import br.com.cezarcruz.data.models.Series;
import br.com.cezarcruz.data.repositories.SeriesRepository;
import br.com.cezarcruz.exception.BusinessException;
import br.com.cezarcruz.web.json.SeriesRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Locale;

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
	public void insert(@Valid @RequestBody final SeriesRequest request,
					   final Locale locale) throws BusinessException {
		repository.save(request.toSeries());
	}
	
	@RequestMapping(value="/list", method = RequestMethod.GET)
	public List<Series> getAll() {
		return repository.findAll();
	}
	
	/**
	 * Drop a serie by id
	 * @param id
	 */
	@RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)//TODO Arrumar isso.
	public void delete(@PathVariable("id") final  String id) {//TODO: ajustar para a forma correta
		repository.delete(Long.parseLong(id));
	}
	
	/**
	 * Update a serie
	 * @param request
	 * @param locale
	 * @throws BusinessException
	 */
	@RequestMapping(value = "/update", method = RequestMethod.PUT)
	public void update(@Valid @RequestBody final SeriesRequest request,
					   final Locale locale) throws BusinessException {
		repository.save(request.toSeries());
	}

	@RequestMapping(value="/last-series", method = RequestMethod.GET)
	public List<Series> getLastSeries() {
		return repository.findFirst5ByOrderByCreatedAtDesc();
	}
}
