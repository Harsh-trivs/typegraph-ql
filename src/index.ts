import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import "reflect-metadata";
import resolvers from "./resolvers/index"
import entities from "./entities";
import { createConnection } from "typeorm";
import dotenv from "dotenv"

dotenv.config()

const main = async () => {
    const schema = await buildSchema({ resolvers });

    const server = new ApolloServer({
        schema,
    });

    server.listen(8000, () =>
        console.log(`Server running: http://localhost:8000`)
    )
};
createConnection({
    type: "postgres",
    url: process.env.DATABASE_URL,
    entities,
    synchronize: true,
    logging: true,
}).then(() => {
    console.log("DATABASE CONNECTED");
    main();
  })
  .catch((e) => {
    console.log({ message: e });
  });
