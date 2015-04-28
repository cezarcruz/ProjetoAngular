package br.com.cezarcruz.handlers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.apache.log4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import br.com.cezarcruz.exception.BusinessException;
import br.com.cezarcruz.models.ErrorInfo;

@ControllerAdvice
public class HandleExceptions {

	private static final Logger logger = Logger.getLogger(HandleExceptions.class);
	
	@ResponseStatus(HttpStatus.BAD_REQUEST)
	@ExceptionHandler(BusinessException.class)
	@ResponseBody
	List<ErrorInfo> handleInvalidValueException(HttpServletRequest req,
			BusinessException bEx) {
		for (ErrorInfo error : bEx.getErrors()) {
			// posso tratar as mesnagen ou interenacionalizar.
			logger.error(error.getMessage());
		}
		return (List<ErrorInfo>) bEx.getErrors();
	}
}
