package br.com.cezarcruz.models;

public class Personagem {
	private String name;
	private String type;

	/**
	 * Construtor simple, utilizado para quando o post
	 * receber um objeto via json!
	 */
	public Personagem() {
		//NADA aqui
	}
	
	public Personagem(String name, String type) {
		this.type = type;
		this.name = name;
	}

	public String getname() {
		return name;
	}

	public void setname(String name) {
		this.name = name;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String toUpperString() {
		return String.format("{\"name\" : \"%s\", \"type\" : \"%s\"}", this.getname().toUpperCase(), this.getType().toUpperCase());
	}

}
