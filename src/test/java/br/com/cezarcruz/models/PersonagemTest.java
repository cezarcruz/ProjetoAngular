package br.com.cezarcruz.models;

import static org.junit.Assert.*;

import org.junit.Test;

public class PersonagemTest {

	/**
	 * Simples teste unitário.
	 */
	@Test
	public void testPersonagemStringString() {
		Personagem p = new Personagem();
		p.setname("Jhon");
		assertEquals("Jhon", p.getname());
		p.setType("Ninja");
		assertEquals("Ninja", p.getType());
		
		assertEquals("{\"name\" : \"JHON\", \"type\" : \"NINJA\"}", p.toUpperString());
	}

}
