import dotenv from "dotenv";
dotenv.config();

export const port = process.env.PORT || 4000;
export const dbUri = process.env.DBURI || "";
export const dbTestUri = process.env.DBTESTURI || "";
