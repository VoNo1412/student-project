import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateCourseDto, UpdateCourseDto } from "src/dto/createCourse.dto";
import { Course } from "src/entity/course.entity";
import { Student } from "src/entity/student.entity";
import { Repository } from "typeorm";

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course)  private courseRepository: Repository<Course>,
    @InjectRepository(Student)  private studentRepository: Repository<Student>
  ) { }

  findAllForStudent(studentId: number) {
    return this.courseRepository.find({ where: { student: { id: studentId } } });
  }

  async addCourseToStudent(studentId: number, createCourseDto: CreateCourseDto) {
    const student = await this.studentRepository.findOne({ where: { id: studentId } });

    if (!student) {
      throw new NotFoundException(`Student with ID ${studentId} not found`);
    }

    const course = this.courseRepository.create({ ...createCourseDto, student });
    return await this.courseRepository.save(course);
  }

  async updateCourse(courseId: number, updateCourseDto: UpdateCourseDto) {
    const course = await this.courseRepository.findOne({ where: { id: courseId } });

    if (!course) {
      throw new NotFoundException(`Course with ID ${courseId} not found`);
    }

    Object.assign(course, updateCourseDto);
    return await this.courseRepository.save(course);
  }

  async deleteCourse(courseId: number) {
    const result = await this.courseRepository.delete(courseId);

    if (result.affected === 0) {
      throw new NotFoundException(`Course with ID ${courseId} not found`);
    }

    return { message: 'Course deleted successfully' };
  }

  async searchCourses(studentId: number, filter: { name?: string; score?: number }) {
    const query = this.courseRepository.createQueryBuilder('course')
      .where('course.studentId = :studentId', { studentId });
  
    if (filter.name) {
      query.andWhere('course.name LIKE :name', { name: `%${filter.name}%` });
    }
  
    if (filter.score) {
      query.andWhere('course.score = :score', { score: filter.score });
    }
  
    return await query.getMany();
  }
  
}
