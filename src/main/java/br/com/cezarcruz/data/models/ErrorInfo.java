package br.com.cezarcruz.data.models;

import java.io.Serializable;

public class ErrorInfo implements Serializable {

	private static final long serialVersionUID = 1905171478428723407L;

	private final String code;

	private final String message;

	public ErrorInfo(final String code, 
					 final String message) {
		this.code = code;
		this.message = message;
	}

	public String getCode() {
		return code;
	}

	public String getMessage() {
		return message;
	}
}
