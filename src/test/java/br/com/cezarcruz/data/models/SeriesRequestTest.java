package br.com.cezarcruz.data.models;

import br.com.cezarcruz.web.json.SeriesRequest;
import org.junit.Test;

/**
 * Really Really fake test
 */
public class SeriesRequestTest {

    @Test
    public void fakeTest() {
        SeriesRequest s = new SeriesRequest();
        s.setId(1L);
        s.setName("foo");
        s.setSeason(1);

        assertEquals(Long.valueOf(1), s.getId());
        assertEquals("foo", s.getName());
        assertEquals(Integer.valueOf(1), s.getSeason());
    }
}
