import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import conect from "./conect"

const connection = conect()
const app: Express = express();

app.use(express.json());
app.use(cors());

const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `)

	return result[0][0]
}

//criando função que busca ator no banco de dados
const getActorByName = async (name: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE name LIKE '%${name}%'
  `)

	return result[0][0]
}

const countActorByGender = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT COUNT(*) FROM Actor WHERE gender='${gender}'`
    )
    return result[0][0]
}

const updateSalary = async (salary: number, id: string): Promise<any> => {
  const result = await connection.raw(`
    UPDATE Actor SET salary='${salary}' WHERE id='${id}'`
    )
    return result[0][0]
}

app.put("/users/:id/update/salary", async (req: Request, res: Response) => {
  try {
    const salary = req.body.salary
    const id = req.params.id

    await updateSalary(salary,id)
    const actor = await getActorById(id)

    res.send(actor)
  } catch (error:any) {
    console.log(error.message)
    res.status(500).send("Unexpected error")
  }
})

app.get("/users/countBy/gender/:gender", async (req: Request, res: Response) => {
  try {
    const gender = req.params.gender

    console.log(req.params);
    
    console.log('await', await countActorByGender(gender))
    const actor = await countActorByGender(gender)
    res.send(actor)
  } catch (error:any) {
    console.log(error.message)
    res.status(500).send("Unexpected error")
  }
})

app.get("/users/query", async (req: Request, res: Response) => {
  try {
    const name = req.query.name as string

    const actor = await getActorByName(name)
    res.send(actor)
  } catch (error:any) {
    console.log('a', error.message)
    res.status(500).send("Unexpected error")
  }
})
//
app.get("/users/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id

    console.log('await', await getActorById(id))
    const actor = await getActorById(id)
    res.send(actor)
  } catch (error:any) {
		console.log(error.message)
    res.status(500).send("Unexpected error")
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

