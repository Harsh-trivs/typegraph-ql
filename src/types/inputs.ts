import { Field, InputType } from "type-graphql";

@InputType()
class NewStudent {
    @Field()
    name: string;
}
@InputType()
class CreateElement {
    @Field()
    done: string;

    @Field()
    pending: string;

    @Field()
    user_id: string;
}

@InputType()
class EditElement {
    @Field()
    done: string;

    @Field()
    pending: string;
}


export { CreateElement, NewStudent,EditElement};