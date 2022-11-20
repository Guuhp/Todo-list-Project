import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('task_table')
export class Task {
    @PrimaryGeneratedColumn('uuid')
    id:string;
    @Column()
    name:string;
    // @Column()
    // create:Date;
}
