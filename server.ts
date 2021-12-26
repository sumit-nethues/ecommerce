import app from "./app";
import dotenv from "dotenv";
import connectMongoDb from "./src/config/database";

// config .env file
dotenv.config({ path: "./src/config/.env" });

const port: number | string = process.env.PORT || 5001;

// app.get("/", async (req: Request, res: Response): Promise<Response> => {
// 	return res.status(200).send({
// 		message: "Hello World!",
// 	});
// });

// setting up listener when db connected
connectMongoDb()
	.then((data) => {
		console.log(`mongoDB connected`);
		app.listen(port, (): void => {
			console.log(
				`mongoDb connected with ${data.connection.host} and server successfully connected on port ${port}`
			);
		});
	})
	.catch((err) => console.log(`error ocurred while connection ${err}`));
