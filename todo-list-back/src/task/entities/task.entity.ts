import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { TaskStatus } from "./task-status-enum";

@Entity('task_table')
export class Task {
    @PrimaryGeneratedColumn('uuid')
    id:string;
    @Column()
    name:string;
    @Column()
    status:TaskStatus;
    


}
