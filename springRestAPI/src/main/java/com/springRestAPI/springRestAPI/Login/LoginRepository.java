package com.springRestAPI.springRestAPI.Login;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface LoginRepository extends JpaRepository<login, Integer> {

	//custome method defination
	@Query("select lo from login lo where lo.email=?1 and lo.password=?2")
	login findByEmailAndPassword(String email,String password);
	
	
}
