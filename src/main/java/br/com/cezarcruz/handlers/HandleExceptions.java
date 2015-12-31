package br.com.cezarcruz.handlers;

import br.com.cezarcruz.data.models.ErrorInfo;
import br.com.cezarcruz.exception.BusinessException;
import org.apache.log4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.util.List;

@ControllerAdvice
public class HandleExceptions {

	private static final Logger LOGGER = Logger.getLogger(HandleExceptions.class);
	
	@ResponseStatus(HttpStatus.BAD_REQUEST)
	@ExceptionHandler(BusinessException.class)
	@ResponseBody
	List<ErrorInfo> handleInvalidValueException(BusinessException bEx) {

		for (ErrorInfo error : bEx.getErrors()) {
			LOGGER.error(error.getMessage());
		}

		return (List<ErrorInfo>) bEx.getErrors();
	}
}
