package br.com.cezarcruz.models;

import static org.junit.Assert.*;

import org.junit.Test;

import br.com.cezarcruz.domain.Personagem;

public class PersonagemTest {

	/**
	 * Simples teste unitário.
	 */
	@Test
	public void testPersonagemStringString() {
		Personagem p = new Personagem();
		p.setName("Jhon");
		assertEquals("Jhon", p.getName());
		p.setType("Ninja");
		assertEquals("Ninja", p.getType());
		
		assertEquals("{\"name\" : \"JHON\", \"type\" : \"NINJA\"}", p.toUpperString());
	}

}
