package com.ems.employee_management_system.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.ems.employee_management_system.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}