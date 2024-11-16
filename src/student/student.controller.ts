import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('students')
export class StudentController {
    constructor(private readonly studentService: StudentService) { }

    @Get()
    findAll() {
        return this.studentService.findAll();
    }

    @Get('search/:name')
    findByName(@Param('name') name: string) {
        return this.studentService.findByName(name);
    }

    @Post()
    create(@Body() student: any) {
        return this.studentService.create(student);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() student: any) {
        return this.studentService.update(id, student);
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.studentService.delete(id);
    }
}
