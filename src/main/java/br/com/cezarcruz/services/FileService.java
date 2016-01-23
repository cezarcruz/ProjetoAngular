package br.com.cezarcruz.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;

@Service
public class FileService {

    private static final Logger LOGGER = LoggerFactory.getLogger(FileService.class);

    /**
     * Save the file in some place
     *
     * @param file
     * @return Path of saved file
     */
    public String saveFile(MultipartFile file)
            throws IllegalArgumentException, IOException {
        if (!file.isEmpty()) {
            try {
                byte[] bytes = file.getBytes();
                String rootPath = System.getProperty("catalina.home");
                File dir = new File(rootPath + File.separator + "tmpFiles");

                if (!dir.exists()) {
                    dir.mkdirs();
                }

                File serveFile = new File(dir.getAbsolutePath() + File.separator + file.getOriginalFilename());
                BufferedOutputStream stream = new BufferedOutputStream(new FileOutputStream(serveFile));
                stream.write(bytes);
                stream.close();
                return serveFile.getAbsolutePath();
            } catch (IOException ex) {
                LOGGER.error("error on saving file {}", ex.getMessage());
                throw ex;
            }
        } else {
            LOGGER.error("file must be provided");
            throw new IllegalArgumentException("File must be provided");
        }
    }
}
