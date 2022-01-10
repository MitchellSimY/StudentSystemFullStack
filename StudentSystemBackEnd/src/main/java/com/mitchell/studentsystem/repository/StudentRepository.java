package com.mitchell.studentsystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.*;

import com.mitchell.studentsystem.model.Student;

@Repository
public interface StudentRepository extends JpaRepository <Student, Integer>{
	
}
