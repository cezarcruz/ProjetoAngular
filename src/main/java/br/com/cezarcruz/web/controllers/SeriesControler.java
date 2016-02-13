package br.com.cezarcruz.web.controllers;

import br.com.cezarcruz.data.models.Series;
import br.com.cezarcruz.data.repositories.SeriesRepository;
import br.com.cezarcruz.exception.BusinessException;
import br.com.cezarcruz.web.json.SeriesRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;


@RestController
@RequestMapping(value = "/series")
public class SeriesControler {

	private static final Logger LOGGER = LoggerFactory.getLogger(SeriesControler.class);

	@Autowired
	private SeriesRepository repository;

	/**
	 * Save a new serie
	 * @param request
	 * @return
	 * @throws BusinessException
     */
	@RequestMapping(value = "/add", method = RequestMethod.POST)
	public void insert(@Valid @RequestBody final SeriesRequest request) throws BusinessException {
		repository.save(request.toSeries());
	}
	
	@RequestMapping(value="/list", method = RequestMethod.GET)
	public List<Series> getAll() {
		LOGGER.info("getting all series");
		return repository.findAll();
	}
	
	/**
	 * Drop a serie by id
	 * @param id
	 */
	@RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
	public void delete(@PathVariable("id") final  String id) {
		LOGGER.info("deletting serie: {}", id);
		repository.delete(Long.parseLong(id));
	}
	
	/**
	 * Update a serie
	 * @param request
	 * @throws BusinessException
	 */
	@RequestMapping(value = "/update", method = RequestMethod.PUT)
	public void update(@Valid @RequestBody final SeriesRequest request) throws BusinessException {
		repository.save(request.toSeries());
	}

	@RequestMapping(value="/last-series/{quantity}", method = RequestMethod.GET)
	public List<Series> getLastSeries(@PathVariable("quantity") final Integer quantity) {
		LOGGER.info("Getting last {} series", quantity);
        Pageable top = new PageRequest(0, quantity);
		return repository.findAllByOrderByCreatedAtDesc(top);
	}
}
