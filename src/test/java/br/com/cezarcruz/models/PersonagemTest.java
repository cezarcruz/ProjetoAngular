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
        p.setNome("Jhon");
        assertEquals("Jhon", p.getNome());
        p.setTipo("Ninja");
        assertEquals("Ninja", p.getTipo());

        assertEquals("{\"name\" : \"JHON\", \"type\" : \"NINJA\"}", p.toUpperString());
    }

}
