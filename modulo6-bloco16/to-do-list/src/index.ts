import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import conect from "./connection"
import { v4 as generateId } from 'uuid';
import { request } from 'http';


const connection = conect()
const app: Express = express();

app.use(express.json());
app.use(cors());

type CustomError = { [chave: string]: { status: number, message: string } }

const Errors: CustomError = {
  MISSING_PARAMETER:
  {
    status: 400,
    message: "Faltou preencher o campo nome, nickname ou email"
  },
  CUSTOMER_NOT_FOUND:
  {
    status: 400,
    message: "Usuário não encontrado!"
  },
  MISSING_PARAMETER_TASK:
  {
    status: 400,
    message: "Faltou preencher algum campo de criação da task."
  },
  TASK_NOT_FOUND:
  {
    status: 400,
    message: "Task não encontrada!"
  }
}
app.get("/user/all", async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await connection("User")

    if (result.length === 0) {
      throw new Error(Errors.CUSTOMER_NOT_FOUND.message)
    }
    res.status(201).send(result)
  } catch (error: any) {
    res.status(Errors.CUSTOMER_NOT_FOUND.status)
      .send(Errors.CUSTOMER_NOT_FOUND.message)
  }
})

app.post("/user", async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, nickname, email } = req.body

    if (!name || !nickname || !email) {
      throw new Error(Errors.MISSING_PARAMETER.message)
    }
    await connection("User")
      .insert({
        id: generateId(),
        name: req.body.name,
        nickname: req.body.nickname,
        email: req.body.email
      })
    res.status(201).send("Usuário cadastrado com sucesso!")
  } catch (error: any) {
    res.status(Errors.MISSING_PARAMETER.status)
      .send(Errors.MISSING_PARAMETER.message)
  }
})

app.get("/user/:id", async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params
    const result = await connection("User").where({ id })

    if (result.length === 0) {
      throw new Error(Errors.CUSTOMER_NOT_FOUND.message)
    }

    res.status(201).send(result)
  } catch (error: any) {
    res.status(Errors.CUSTOMER_NOT_FOUND.status)
      .send(Errors.CUSTOMER_NOT_FOUND.message)
  }
})

app.put("/user/edit/:id", async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params
    const { name, nickname} = req.body

    if (!name || !nickname) {
      throw new Error(Errors.MISSING_PARAMETER.message)
    }

    const newUser = {
      name: name,
      nickname: nickname
    }

    await connection("User")
    .update({
      name: newUser.name,
      nickname: newUser.nickname
    })
    .where({id})

    const result = await connection("User").where({ id })

    res.status(200).send(result)
  } catch (error: any) {
    res.status(Errors.MISSING_PARAMETER.status)
      .send(Errors.MISSING_PARAMETER.message)
  }
})

const transformData = (data:any) => {
  const dataArray = data.split('/')
  const defaulDataTransform = `${dataArray[2]}/${dataArray[1]}/${dataArray[0]}`
  
  return defaulDataTransform
}

app.post("/task", async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, description, limitDate, creatorUserId } = req.body
    const dataConvert = transformData(limitDate)

    if( !title || !description || !limitDate || !creatorUserId){
      throw new Error(Errors.MISSING_PARAMETER_TASK.message)
    }
    await connection("Task")
      .insert({
        title,
        description,
        limitDate: dataConvert,
        creator_user_id: req.body.creatorUserId
      })
    res.status(201).send("Tarefa criada com sucesso!")

  } catch (error: any) {
    res.status(Errors.MISSING_PARAMETER_TASK.status)
      .send(Errors.MISSING_PARAMETER_TASK.message)
  }
})

app.get("/task/:id", async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params
    const result = await connection("Task").where({ id })
    if(result.length === 0){
      throw new Error(Errors.TASK_NOT_FOUND.message)
    }
    res.status(201).send(result)
  } catch (error: any) {
    res.status(Errors.TASK_NOT_FOUND.status)
      .send(Errors.TASK_NOT_FOUND.message)
  }
})


const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

