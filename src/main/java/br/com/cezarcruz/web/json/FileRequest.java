package br.com.cezarcruz.web.json;

import org.springframework.web.multipart.MultipartFile;

/**
 * Created by cezar on 18/01/16.
 */
public class FileRequest {
    private String name;
    private MultipartFile file;

    public String getName() {
        return name;
    }

    public void setName(final String name) {
        this.name = name;
    }

    public MultipartFile getFile() {
        return file;
    }

    public void setFile(final MultipartFile file) {
        this.file = file;
    }
}
