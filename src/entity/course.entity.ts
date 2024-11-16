import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Student } from './student.entity';

@Entity()
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('float')
  score: number;

  @ManyToOne(() => Student, (student) => student.courses, { onDelete: 'CASCADE' })
  student: Student;
}
