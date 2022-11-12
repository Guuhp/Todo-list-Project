import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './task/entities/task.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 9001,
      username: 'root',
      password: 'admin',
      database: 'todolist',
      entities: [Task],
      synchronize: true,
      logging: true,
    }),
    TaskModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
