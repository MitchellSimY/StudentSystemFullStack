package com.mitchell.studentsystem.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.mitchell.studentsystem.model.Student;
import com.mitchell.studentsystem.repository.StudentRepository;

@Service	
public class StudentServiceImplementation implements StudentService{

	@Autowired
	private StudentRepository studentRepository;
	
	@Override
	public Student saveStudent(Student student) {
		
		return studentRepository.save(student);
	}

	@Override
	public List<Student> getAllStudents() {
		return studentRepository.findAll();
	}

	@Override
	public Student getStudent(Integer id) {
		return studentRepository.getById(id);
	}

	@Override
	public void deleteStudent(Integer id) {
		 studentRepository.deleteById(id);
	}
	
	
	
}
