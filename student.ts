export class Student {
  constructor(public id: string, public name: string) {}
}

let studentInstance: Student;

export function getStudentInstance(id: string, name: string): Student {
  if (!studentInstance) {
    studentInstance = new Student(id, name);
  }
  return studentInstance;
} 