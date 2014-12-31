package br.com.cezarcruz.domain;

public class Personagem {

	private long id;
	private String name;
	private String type;

	/**
	 * Construtor simple, utilizado para quando o post receber um objeto via
	 * json!
	 */
	public Personagem() {
		// NADA aqui
	}

	public Personagem(String name, String type) {
		this.type = type;
		this.name = name;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String toUpperString() {
		return String.format("{\"name\" : \"%s\", \"type\" : \"%s\"}", this
				.getName().toUpperCase(), this.getType().toUpperCase());
	}

}
