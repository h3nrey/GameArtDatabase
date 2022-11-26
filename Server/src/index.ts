import { PrismaClient } from "@prisma/client";
import express from "express";

const prisma = new PrismaClient();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.raw({ type: "application/vnd.custom-type" }));
app.use(express.text({ type: "text/html" }));

app.get("/", async (req, res) => {
  const user = await prisma.user.findMany()
  // const user = {name: "geroge", age: 12}

  res.json(user);
});


app.get("/", async (req, res) => {
  res.send(
    `
  <h1>Todo REST API</h1>
  <h2>Available Routes</h2>
  <pre>
    GET, POST /home
  </pre>
  `.trim(),
  );
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
