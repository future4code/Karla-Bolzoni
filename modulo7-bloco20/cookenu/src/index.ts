import app from "./app"
import { friendRouter } from "./controller/friendRouter"
import { recipeRouter } from "./controller/recipeRouter"
import { userRouter } from "./controller/userRouter"


app.use('/user/', userRouter)
app.use('/recipe/', recipeRouter)
app.use('/friendship/', friendRouter)
