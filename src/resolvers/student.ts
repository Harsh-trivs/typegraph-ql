import Student from "../entities/student";
import { NewStudent } from "../types/inputs";
import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from "type-graphql";

@Resolver(() => Student)
class helloworld {
    @Mutation(() => Student)
    async createStudent(@Arg("NewStudentData") newStudent: NewStudent) {
        try {
            const student = new Student;
            student.name = newStudent.name;
            const studentCreated = await student.save();
            return studentCreated;
        } catch (e) {
            throw new Error(e.message);
        }
    }

    @Query(() => Student)
    async getStudent(@Arg("Id") id: string){
        const student = await Student.findOne({where :{id: id}});
        try {
            return student;
        }
    catch(e){
        throw new Error(e.message);
    }
    }

    @FieldResolver()
    async todos(@Root() { id }: Student) {
        const user = await Student.findOne({ where: { id: id }, relations: ["todos"] });
        try {
            return user?.todos;
        } catch (e) {
            throw new Error(e.message);
        }
    }

}
export default helloworld;