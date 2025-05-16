import express from "express";
import { createHandler } from "graphql-http/lib/use/express";
import { ruruHTML } from "ruru/server";
import schema from "./graphql/schema.js";
import rootValue from "./graphql/resolvers.js";
import cors from "cors";
const app = express();
app.use(cors());
// app.use(express.json());
// app.get("/", (req, res) => {
//   res.status(200).send({ status: "Ok", message: "Hi, I'm alive!!!" });
// });

app.all("/graphql", createHandler({ schema: schema, rootValue: rootValue })); // GQL schema and resolvers

// Serve the GraphiQL IDE.
app.get("/", (_req, res) => {
  res.type("html");
  res.end(ruruHTML({ endpoint: "/graphql" }));
});

export default app;
