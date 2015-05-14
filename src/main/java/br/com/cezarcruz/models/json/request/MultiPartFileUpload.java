package br.com.cezarcruz.models.json.request;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

public class MultiPartFileUpload {
	private List<MultipartFile> files;

	public List<MultipartFile> getFiles() {
		return files;
	}

	public void setFiles(List<MultipartFile> files) {
		this.files = files;
	}
}
