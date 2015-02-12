package br.com.cezarcruz.models;

/**
 * Objetos com os erros trataveis.
 * 
 * @author ccruz
 *
 */
public class ErrorInfo {
	private final String code;

	public String getCode() {
		return code;
	}

	public String getMessage() {
		return message;
	}

	private final String message;

	public ErrorInfo(String code, String message) {
		this.code = code;
		this.message = message;
	}

}
