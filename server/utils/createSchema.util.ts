import { buildSchema } from "type-graphql";

export const createSchema = () =>
  buildSchema({
    resolvers: [__dirname + "/../modules/**/*.resolver.ts"],
    validate: { forbidUnknownValues: false },
  });
