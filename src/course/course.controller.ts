import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { StudentService } from 'src/student/student.service';
import { CourseService } from './course.service';
import { CreateCourseDto, UpdateCourseDto } from 'src/dto/createCourse.dto';

@Controller('course')
export class CourseController {
    constructor(
        private studentService: StudentService,
        private courseService: CourseService
    ) { }

    @Get(':id')
    async findCourses(@Param('id') id: number) {
        return this.studentService.findCourse(id);
    }

    @Post('students/:studentId/courses')
    async addCourse(
        @Param('studentId') studentId: number,
        @Body() createCourseDto: CreateCourseDto,
    ) {
        return this.courseService.addCourseToStudent(studentId, createCourseDto);
    }

    @Patch('/:courseId')
    async updateCourse(
        @Param('courseId') courseId: number,
        @Body() updateCourseDto: UpdateCourseDto,
    ) {
        return this.courseService.updateCourse(courseId, updateCourseDto);
    }

    @Delete('/:courseId')
    async deleteCourse(@Param('courseId') courseId: number) {
        return this.courseService.deleteCourse(courseId);
    }

    @Get('/:studentId/courses')
    async searchCourses(
      @Param('studentId') studentId: number,
      @Query('name') name?: string,
      @Query('score') score?: number,
    ) {
      return this.courseService.searchCourses(studentId, { name, score });
    }
    

}
