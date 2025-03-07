package com.springRestAPI.springRestAPI.service;

import java.util.List;

import com.springRestAPI.springRestAPI.Login.Response;
import com.springRestAPI.springRestAPI.entities.techprimelab;


public interface TechPrimeLabService {

	//save project data
	Response saveProject(techprimelab tech);
	
	//get all project data
	List<techprimelab> getAllProject(Integer pageNumber,Integer pageSize ,String sortBy);
	
	//update status
	Response updateProject(int p_id,String status);
	
	//search project
	List<techprimelab> searchRecords(String searchText, Integer pageNumber,Integer pageSize ); 
	
	//count
	long countAllProjects();
	int countClosedProjects();
	int countRunningProjects();
	int countCancelProjects();
	int countRunningProjectsWithEndDateBeforeToday();

	//For Graph
	List<Object[]> countTotalAndClosedProjectsByDepartment();

	Response deleteProject(int pid);

	

	

	
}






