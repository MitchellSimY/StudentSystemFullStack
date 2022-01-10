package com.mitchell.studentsystem.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
	
	
	
}
