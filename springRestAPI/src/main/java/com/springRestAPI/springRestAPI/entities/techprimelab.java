package com.springRestAPI.springRestAPI.entities;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity(name="techprimelab")
@Table(name="techprimelab")
public class techprimelab {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int pid;
	private String reason;
	private String type;
	private String division;
	private String category;
	private String priority;
	private String department;
	private Date start_date;
	private Date end_date;
	private String status;
	private String location;
	private String pname;

	
	
	public techprimelab(int p_no, String pname, String reason, String type, String division, String category,
			String priority, String department, Date start_date, Date end_date, String status, String location) {
		super();
		this.pid = p_no;
		this.pname= pname;
		//this.p_name = p_name;
		this.reason = reason;
		this.type = type;
		this.division = division;
		this.category = category;
		this.priority = priority;
		this.department = department;
		this.start_date = start_date;
		this.end_date = end_date;
		this.status = status;
		this.location = location;
			}
	
	

	public int getPid() {
		return pid;
	}



	public void setPid(int pid) {
		this.pid = pid;
	}



	public String getPname() {
		return pname;
	}



	public void setPname(String pname) {
		this.pname = pname;
	}



	public String getLocation() {
		return location;
	}



	public void setLocation(String location) {
		this.location = location;
	}



	


	public techprimelab() {
		super();
		// TODO Auto-generated constructor stub
	}

//	public int getP_no() {
//		return pid;
//	}
//
//	public void setP_no(int p_no) {
//		this.pid = p_no;
//	}

//	public String getP_name() {
//		return p_name;
//	}
//
//	public void setP_name(String p_name) {
//		this.p_name = p_name;
//	}

	public String getReason() {
		return reason;
	}

	public void setReason(String reason) {
		this.reason = reason;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getDivision() {
		return division;
	}

	public void setDivision(String division) {
		this.division = division;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getPriority() {
		return priority;
	}

	public void setPriority(String priority) {
		this.priority = priority;
	}

	public String getDepartment() {
		return department;
	}

	public void setDepartment(String department) {
		this.department = department;
	}

	public Date getStart_date() {
		return start_date;
	}

	public void setStart_date(Date start_date) {
		this.start_date = start_date;
	}

	public Date getEnd_date() {
		return end_date;
	}

	public void setEnd_date(Date end_date) {
		this.end_date = end_date;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
	
	
	
}
