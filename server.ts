import "reflect-metadata";

import { dbUri, port } from "./env";

import { ApolloServer } from "apollo-server-express";
import { app } from "./server/app";
import { connect } from "mongoose";
import { createSchema } from "./server/utils";

async function bootstrap() {
  const schema = await createSchema();

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
