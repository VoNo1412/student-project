import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Course } from "src/entity/course.entity";
import { Repository } from "typeorm";

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course)
    private courseRepository: Repository<Course>,
  ) {}

  findAllForStudent(studentId: number) {
    return this.courseRepository.find({ where: { student: { id: studentId } } });
  }

  create(course: Partial<Course>) {
    return this.courseRepository.save(course);
  }

  update(id: number, course: Partial<Course>) {
    return this.courseRepository.update(id, course);
  }

  delete(id: number) {
    return this.courseRepository.delete(id);
  }

  
}
