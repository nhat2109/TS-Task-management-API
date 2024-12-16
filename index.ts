import express, {Express, Request, Response} from "express";
import dotenv from "dotenv";
import * as database from "./config/database";
import mainV1Routes from "./API/v1/routes/index.route";

dotenv.config();
database.connect();
const app = express();
const port: number | string = process.env.PORT || 3000 ;

mainV1Routes(app);

app.listen(port, () =>{
    console.log(`Server is running at http://localhost:${port}`);
});