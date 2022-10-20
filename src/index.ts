import express from 'express';
import userRouter from './user/userRouter';

//import userRouter from './src/user/user.router';

const app = express();
app.use(express.json());
app.use("/", userRouter);



app.listen(5000, () => {
    console.log("Server is running on : http://localhost:5000");

});