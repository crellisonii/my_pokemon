import "reflect-metadata";

import {
  BerryResolver,
  ContestResolver,
  EncounterResolver,
  EvolutionResolver,
  GamesResolver,
  ItemResolver,
  LanguageResolver,
  LocationResolver,
  MachineResolver,
  MoveResolver,
  PokemonResolver,
} from "./server/modules";
import { dbUri, port } from "./env";

import { ApolloServer } from "apollo-server-express";
import { app } from "./server/app";
import { buildSchema } from "type-graphql";
import { connect } from "mongoose";
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
      LanguageResolver,
      LocationResolver,
      MachineResolver,
      MoveResolver,
      PokemonResolver,
    ],
    validate: { forbidUnknownValues: false },
  });

  const server = await new ApolloServer({
    schema,
  });

  await server.start();

  const express = app as any;

  server.applyMiddleware({ app: express });

  connect(dbUri)
    .then(result => {
      console.log("Connected to mongodb!!");

      app.listen(port, () => {
        console.log(`Server is really running on Port ${port}`);
      });
    })
    .catch(e => {
      console.table(e);
    });
}

bootstrap();
