package com.springRestAPI.springRestAPI.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException {

private static final long serialVersionUID = 1L;
	
	private String resourceName;
	private String fileName;
	private Object filedValue;
	
	public ResourceNotFoundException(String resourceName, String fileName, Object filedValue) {
		super(String.format("%s not found with %s : '%s",resourceName,fileName,filedValue));
		this.resourceName = resourceName;
		this.fileName = fileName;
		this.filedValue = filedValue;
	}

	public String getResourceName() {
		return resourceName;
	}

	public String getFileName() {
		return fileName;
	}

	public Object getFiledValue() {
		return filedValue;
	}
	
}
