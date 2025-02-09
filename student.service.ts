import { Injectable } from '@nestjs/common';
import { Student } from './student';

@Injectable()
export class StudentService {
  private students: Student[] = [];

  getAll() {
    return this.students;
  }

  create(student: Student) {
    this.students.push(student);
    return student;
  }

  update(updatedStudent: Student) {
    const index = this.students.findIndex(s => s.id === updatedStudent.id);
    if (index > -1) {
      this.students[index] = updatedStudent;
      return updatedStudent;
    }
    return null;
  }

  delete(id: string) {
    this.students = this.students.filter(s => s.id !== id);
  }
} 