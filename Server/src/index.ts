import { PrismaClient } from "@prisma/client";
import express from "express";
import cors from "cors"

const prisma = new PrismaClient();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.raw({ type: "application/vnd.custom-type" }));
app.use(express.text({ type: "text/html" }));
app.use(cors());

app.get("/home", async (req, res) => {
  const posts = await prisma.post.findMany();  

  res.json(posts);
});

app.get("/user/:id", async(req, res) => {
  const id = req.body.userId;

  const user = await prisma.user.findUnique({
    where:{
      id: id,
    }
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
