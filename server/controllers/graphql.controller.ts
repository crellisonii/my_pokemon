import { NextFunction, Request, Response } from "express";

export const graphqlController = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  next();
};
