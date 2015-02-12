package br.com.cezarcruz.exception;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.validation.ObjectError;

import br.com.cezarcruz.models.ErrorInfo;

/**
 * Erros trataveis.
 * @author ccruz
 *
 */
public class BusinessException extends Exception {

	private static final long serialVersionUID = 1L;
	private final Collection<ErrorInfo> errors;
	
	public BusinessException(Collection<ErrorInfo> errors) {
		this.errors = errors;
	}
	
	public BusinessException(List<ObjectError> validationsErrors) {
		errors = new ArrayList<ErrorInfo>();
		for (ObjectError e : validationsErrors) {
			ErrorInfo eInf = new ErrorInfo(e.getCode(), e.getDefaultMessage());
			errors.add(eInf);
		}
	}
	
	public BusinessException(ErrorInfo error) {
		errors = new ArrayList<ErrorInfo>();
		errors.add(error);
	}

	public Collection<ErrorInfo> getErrors() {
		return errors;
	}
	
}
