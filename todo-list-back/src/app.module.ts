import { Module } from '@nestjs/common';
import { Task } from './task/entities/task.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskModule } from './task/task.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 9001,
      username: 'root',
      password: 'admin',
      database: 'todoTask',
      entities: [Task],
      synchronize: true,
      logging: true,
    }),
    TaskModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
