import { app } from "./app";
import { getAllExercises } from "./endpoints/getAllExercises";
import cors from "cors"
import { AddressInfo } from "net"
import express from "express"
import { Request, Response } from "express"
import {getExercisesForName} from "./endpoints/getExercisesForName"
import { getExercisesForType } from "./endpoints/getExercisesForType"
import { getExercisesForTypeOrderName } from "./endpoints/getExercisesForTypeOrderName"

app.get("/exercises/user", getExercisesForName)
app.get("/exercises/:type", getExercisesForType)
app.get("/orderExercises/:type", getExercisesForTypeOrderName)
app.get("/exercises", getAllExercises)



app.use(express.json())
app.use(cors())

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
})