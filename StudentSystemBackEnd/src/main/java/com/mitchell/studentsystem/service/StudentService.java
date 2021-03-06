package com.mitchell.studentsystem.service;

import java.util.List;

import com.mitchell.studentsystem.model.Student;

public interface StudentService {
	public Student saveStudent(Student student);
	
	public List<Student> getAllStudents();
	
	public Student getStudent(Integer id);

	public void deleteStudent(Integer id);
}
