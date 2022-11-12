import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('task_table')
export class Task {
    @PrimaryGeneratedColumn()
    id:string;
    @Column()
    name:string;
}
