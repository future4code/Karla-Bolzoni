import express, { Request, Response } from "express";
import { AddressInfo } from "net";
import { GeneratedIdentifierFlags } from "typescript";
import { Task } from './data'
import { taskList } from "./data";
import { v4 as generateId } from 'uuid';

const app = express();

app.use(express.json());

app.get('/todos', (req: Request,res: Response) => {
  const taskStatus = taskList.filter((task) => {
    return task.completed === false
  })
  res.send(taskStatus)
})

app.get('/done', (req: Request,res: Response) => {
  const taskStatus = taskList.filter((task) => {
    return task.completed === true
  })
  res.send(taskStatus)
})

app.post('/todos', (req: Request, res: Response) => {
  const user = req.headers.authorization
  
  const taskName = req.body.title;
  if(!taskName){
    res.status(400).send("Favor informar nome da lista no body.")
    return
  }

  const statusTask = req.body.completed

  const newTask: any = {
    id: generateId(),
    userId: user,
    title: taskName,
    completed: statusTask
  }

  taskList.push(newTask)

  res.send('ok')

})

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;