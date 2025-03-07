package com.springRestAPI.springRestAPI.entities;

public class data {

	private int pid;
	private String status;
	public data(int pid, String status) {
		super();
		this.pid = pid;
		this.status = status;
	}
	public data() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getPid() {
		return pid;
	}
	public void setPid(int pid) {
		this.pid = pid;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	
	
	
}
