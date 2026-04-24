package com.example.restapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.restapi.model.Student;

public interface StudentRepository extends JpaRepository<Student, Integer> {
}