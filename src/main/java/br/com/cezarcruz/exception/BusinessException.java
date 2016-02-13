package br.com.cezarcruz.exception;

import br.com.cezarcruz.data.models.ErrorInfo;
import org.springframework.validation.ObjectError;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

public class BusinessException extends Exception {
	
	private static final long serialVersionUID = -9030102185541153107L;
	
	private final transient Collection<ErrorInfo> errors;
	
	public BusinessException(final Collection<ErrorInfo> errors) {
		this.errors = errors;
	}
	
	public BusinessException(final List<ObjectError> validationsErrors) {
		errors = new ArrayList<ErrorInfo>();
		for (ObjectError e : validationsErrors) {
			ErrorInfo eInf = new ErrorInfo(e.getCode(), e.getDefaultMessage());
			errors.add(eInf);
		}
	}
	
	public BusinessException(final ErrorInfo error) {
		errors = new ArrayList<ErrorInfo>();
		errors.add(error);
	}

	public Collection<ErrorInfo> getErrors() {
		return errors;
	}
}
