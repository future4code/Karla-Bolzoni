import { Request, Response } from "express"
import { connection } from "../data/connection"
import { exercise } from "../types"


export const getExercisesForName = async (req: Request, res: Response): Promise<void> => {
  try {
    let name = req.query.name as string

    const result = await selectUser(name)
    const user = result.map(toExercise)
    res.status(200).send(user)


  } catch (error: any) {
    console.log(error)
    res.send(error.message || error.sqlMessage)
  }
}
const toExercise = (input: any): exercise => {
  return {
    id: input.id,
    name: input.name,
    email: input.email,
    type: input.type,
  }
}

export default async function selectUser(name: string): Promise<any> {

  const result = await connection.raw(`
    SELECT * FROM aula48_exercicio WHERE (name LIKE "%${name}%");`
  )

  return result[0]
}