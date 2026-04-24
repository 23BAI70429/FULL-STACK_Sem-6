package com.example.restapi.service;

import java.util.List;
import org.springframework.stereotype.Service;
import com.example.restapi.model.Student;
import com.example.restapi.repository.StudentRepository;

@Service
public class StudentService {

    private final StudentRepository repository;

    public StudentService(StudentRepository repository) {
        this.repository = repository;
    }

    public List<Student> getAllStudents() {
        return repository.findAll();
    }

    public Student getStudentById(int id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Student not found with id " + id));
    }

    public Student saveStudent(Student student) {
        return repository.save(student);
    }

    public Student updateStudent(int id, Student updatedStudent) {
        Student existing = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Student not found with id " + id));

        existing.setName(updatedStudent.getName());
        existing.setCourse(updatedStudent.getCourse());

        return repository.save(existing);
    }

    public void deleteStudent(int id) {
        Student existing = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Student not found with id " + id));

        repository.delete(existing);
    }
}