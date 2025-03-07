package com.springRestAPI.springRestAPI.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.springRestAPI.springRestAPI.entities.techprimelab;

@Repository
public interface TechPrimeLabRepository extends JpaRepository<techprimelab, Integer> {
 	
 	//count status by custome query
 	int countByStatus(String status);
 	
 	//count clouser delay project by custome query
 	 @Query("SELECT COUNT(t) FROM techprimelab t WHERE t.status = 'Running' AND t.end_date < CURRENT_DATE")
     int countRunningProjectsWithEndDateBeforeToday();
 	
 	//count departmentwise project by custome query
 	@Query("SELECT p.department, COUNT(p) AS totalProjects, SUM(CASE WHEN p.status = 'Closed' THEN 1 ELSE 0 END) AS closedProjects " +
            "FROM techprimelab p " +
            "GROUP BY p.department")
     List<Object[]> countTotalAndClosedProjectsByDepartment();
     
//     @Query("SELECT p.status, COUNT(p) AS totalProjects, SUM(CASE WHEN p.status = 'Closed' THEN 1 ELSE 0 END)AS closedProjects,SUM(CASE WHEN p.status = 'Running' THEN 1 ELSE 0 END) AS runningProjects,SUM(CASE WHEN p.status = 'R' THEN 1 ELSE 0 END) AS runningProjects " +
//             "FROM techprimelab p " +
//             "GROUP BY p.status")
//     
     //searching on any column by custome query
     @Query("SELECT t FROM techprimelab t WHERE " +
             "LOWER(t.pname) LIKE LOWER(concat('%', :filterText, '%')) OR " +
             "LOWER(t.reason) LIKE LOWER(concat('%', :filterText, '%')) OR " +
             "LOWER(t.type) LIKE LOWER(concat('%', :filterText, '%')) OR " +
             "LOWER(t.division) LIKE LOWER(concat('%', :filterText, '%')) OR " +
             "LOWER(t.category) LIKE LOWER(concat('%', :filterText, '%')) OR " +
             "LOWER(t.priority) LIKE LOWER(concat('%', :filterText, '%')) OR " +
             "LOWER(t.department) LIKE LOWER(concat('%', :filterText, '%')) OR " +
             "LOWER(t.location) LIKE LOWER(concat('%', :filterText, '%')) OR " +
             "LOWER(t.status) LIKE LOWER(concat('%', :filterText, '%'))")
     Page<techprimelab> searchProject(@Param("filterText") String filterText,Pageable p);
 	 
 	 
}
