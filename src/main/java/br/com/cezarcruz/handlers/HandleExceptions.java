package br.com.cezarcruz.handlers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import br.com.cezarcruz.exception.BusinessException;
import br.com.cezarcruz.models.ErrorInfo;

@ControllerAdvice
public class HandleExceptions {
	
	@ResponseStatus(HttpStatus.BAD_REQUEST)
	@ExceptionHandler(BusinessException.class)
	@ResponseBody List<ErrorInfo> handleInvalidValueException(HttpServletRequest req, BusinessException bEx) {
		for (ErrorInfo error : bEx.getErrors()) {
			//posso tratar as mesnagen ou interenacionalizar.
		}
		return (List<ErrorInfo>) bEx.getErrors();
	}
}
