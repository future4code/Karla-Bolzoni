"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./controller/app");
const UserController_1 = require("./controller/UserController");
const userController = new UserController_1.UserController();
app_1.app.post('/createUser', userController.createUser);
// app.get('/health', (req: any,res: any) => {
//   res.send("i'm healthy")
// })
