import { Module } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseController } from './course.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from 'src/entity/course.entity';
import { StudentModule } from 'src/student/student.module';
import { StudentService } from 'src/student/student.service';

@Module({
  imports: [TypeOrmModule.forFeature([Course])], // Tích hợp Entity
  providers: [CourseService, StudentService],
  controllers: [CourseController]
})
export class CourseModule {}
