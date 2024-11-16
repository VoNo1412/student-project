import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from 'src/entity/student.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Student])], // Tích hợp Entity
  providers: [StudentService],
  controllers: [StudentController],
  exports: [StudentService]
})
export class StudentModule {}
