import { Request, Response } from "express"
import { connection } from "../data/connection"
import { exercise } from "../types"

export async function getAllExercises(
   req: Request,
   res: Response
): Promise<void> {
   console.log('testeando 123');
   
   try {
      
      let type = req.params.type;
      let name = req.query.name as string

      const result = await connection("aula48_exercicio")
      .select()
      .where("name", "like", `%${name}%`)

      const exercises = result.map(toExercise)

      res.status(200).send(exercises)

   } catch (error) {
      console.log(error);
      res.status(500).send("Internal server error")
      
      
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

export default async function selectAllUsers():Promise<any> {
   const result = await connection.raw(`
      SELECT id, name, email, type
      FROM aula48_exercicio;
   `)

   return result[0]
}