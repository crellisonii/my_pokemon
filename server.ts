import "reflect-metadata";

import {
  BerryResolver,
  ContestResolver,
  EncounterResolver,
  EvolutionResolver,
  GamesResolver,
  ItemResolver,
  LocationResolver,
} from "./server/modules";

import { ApolloServer } from "apollo-server-express";
import { app } from "./server/app";
import { buildSchema } from "type-graphql";

const port = 4000;

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [
      BerryResolver,
      ContestResolver,
      EncounterResolver,
      EvolutionResolver,
      GamesResolver,
      ItemResolver,
      LocationResolver,
    ],
    validate: { forbidUnknownValues: false },
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
