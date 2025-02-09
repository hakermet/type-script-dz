import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './student';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  getAllStudents() {
    return this.studentService.getAll();
  }

  @Post()
  createStudent(@Body() student: Student) {
    return this.studentService.create(student);
  }

  @Put(':id')
  updateStudent(@Body() student: Student) {
    return this.studentService.update(student);
  }

  @Delete(':id')
  deleteStudent(@Body('id') id: string) {
    return this.studentService.delete(id);
  }
} 