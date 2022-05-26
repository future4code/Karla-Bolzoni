import { app } from "./controller/app";
import { UserController } from "./controller/UserController"

const userController = new UserController()

app.post('/createUser', userController.createUser)
// app.get('/health', (req: any,res: any) => {
//   res.send("i'm healthy")
// })