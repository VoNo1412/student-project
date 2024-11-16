import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentModule } from './student/student.module';
import { CourseModule } from './course/course.module';
import { Student } from './entity/student.entity';
import { Course } from './entity/course.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password', // Thay bằng mật khẩu của bạn
      database: 'APIDB',
      entities: [Student, Course], // Đưa vào danh sách các Entity
      synchronize: true, // Đồng bộ schema tự động (chỉ dùng cho phát triển)
    }),
    StudentModule,
    CourseModule,
  ],
})
export class AppModule {}
