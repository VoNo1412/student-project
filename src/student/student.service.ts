import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from 'src/entity/student.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
  ) { }

  findAll() {
    return this.studentRepository.find();
  }

  findByName(name: string) {
    return this.studentRepository.find({ where: { name } });
  }

  create(student: Partial<Student>) {
    return this.studentRepository.save(student);
  }

  update(id: number, student: Partial<Student>) {
    return this.studentRepository.update(id, student);
  }

  delete(id: number) {
    return this.studentRepository.delete(id);
  }

  async findCourse(id: any) {
    const student = await this.studentRepository.findOne({
      where: { id },
      relations: ['courses'],
    });
    if (!student) return { message: 'Student not found' };

    const courses = student.courses;
    const avgScore =
      courses.reduce((sum, course) => sum + course.score, 0) / courses.length;

    let grade: string;
    if (avgScore >= 8.5) grade = 'Excellent';
    else if (avgScore >= 7) grade = 'Good';
    else if (avgScore >= 5) grade = 'Average';
    else grade = 'Poor';

    return { courses, avgScore, grade };
  }
}
