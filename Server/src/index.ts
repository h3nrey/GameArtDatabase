import { PrismaClient } from "@prisma/client";
import express from "express";
import cors from "cors"
import { json } from "body-parser";

const prisma = new PrismaClient();

const app = express();
const port = process.env.PORT || 8000;

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

app.post("/user/login", async(req,res) => {
  const {email, password} = req.body.data;

  const user = await prisma.user.findUnique({
    where:{
      email: email,
    }
  })

  if(!user) {
    res.json({
      userFound: false,
      passwordMatch: false,
      user: null,
    })
    return;
  } else{
    if(user?.password == password) {
      res.json({
        userFound: true,
        passwordMatch: true,
        user: user,
      })
    } else {
      res.json({
        userFound: true,
        passwordMatch: false,
        user: null,
      })
    }
  }

  
})

app.post("/user/signin", async(req, res) => {
  const {email, password} = req.body.data;

  const hasUser = await prisma.user.findMany({
    where:{
      email: email
    }
  })

  if(hasUser.length > 0) {
    console.log(hasUser);
    res.json({
      userCreated: false,
      userAlreadyExists: true,
      user: null,
    })
  } else {
    const user = await prisma.user.create({
      data: {
        email: email,
        password: password,
      }
    })
    res.json({
      userCreated: true,
      userAlreadyExits: false,
      user: user,
    });
  }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
