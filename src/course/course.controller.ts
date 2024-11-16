import { Controller, Get, Param } from '@nestjs/common';
import { StudentService } from 'src/student/student.service';

@Controller('course')
export class CourseController {
    constructor(
        private studentService: StudentService
      ) {}

    @Get(':id/courses')
    async findCourses(@Param('id') id: number) {
        return this.studentService.findCourse(id);
    }
}
