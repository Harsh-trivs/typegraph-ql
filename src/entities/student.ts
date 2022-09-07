
import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Todo from "./todo";

@Entity("Student")
@ObjectType("Student")
class Student extends BaseEntity {
   @PrimaryGeneratedColumn("uuid")
   @Field()
   id: string;

   @Column()
   @Field()
   name: string;

   @OneToMany(() => Todo, todos => todos.user)
   @Field(() => [Todo], { nullable: true })
   todos: Todo[]

}

export default Student;