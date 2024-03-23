import { app } from "./api/api"; // Ensure that 'app' is exported from your Express setup file
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT ? Number(process.env.PORT) : 3000;

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
