package com.mitchell.studentsystem.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mitchell.studentsystem.model.Student;
import com.mitchell.studentsystem.service.StudentService;

@RestController
@RequestMapping("/student")
@CrossOrigin
public class StudentController {
	@Autowired
	private StudentService studentService;
	
	// Adding A Student
	@PostMapping("/add")
	public String add(@RequestBody Student student) {
		System.out.println(student.getFirstName());
		studentService.saveStudent(student);
		return "New student has been added";
	}
	
	// Getting all students
	@GetMapping("/getAllStudents")
	public List<Student> getAllStudents() {
		return studentService.getAllStudents();
	}
	
	// getting ONE student by ID
	@GetMapping("/getStudent/{id}")
	public Student getStudent(@PathVariable Integer id) {
		System.out.println("Controlla id: " + id);
		return studentService.getStudent(id);
	}
	
	// Update a student
	@PutMapping("/updateStudent/{id}")
	public void updateStudent(Student student) {
		
	}
	
	// Delete a student
	@DeleteMapping("/deleteStudent/{id}")
	public String deleteStudent(@PathVariable Integer id) {
		studentService.deleteStudent(id);
		return "A student has since been deleted";
	}
	
}



