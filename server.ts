import "reflect-metadata";

import { ApolloServer } from "apollo-server-express";
import { BerryResolver } from "./server/modules/berries/resolver";
import { app } from "./server/app";
import { buildSchema } from "type-graphql";

const port = 4000;

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [BerryResolver],
  });

  const server = await new ApolloServer({
    schema,
  });

  await server.start();

  server.applyMiddleware({ app });

  app.listen(port, () => {
    console.log(`Server is running on Port ${port}`);
  });
}

bootstrap();
