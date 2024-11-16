import { Module } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseController } from './course.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from 'src/entity/course.entity';
import { StudentModule } from 'src/student/student.module';
import { Student } from 'src/entity/student.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Course, Student]), StudentModule], // Tích hợp Entity
  providers: [CourseService],
  controllers: [CourseController]
})
export class CourseModule {}
