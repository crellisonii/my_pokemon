import express from "express";
import { graphqlController } from "../controllers";

export const router = express.Router();

router.get("/graphql", graphqlController);
