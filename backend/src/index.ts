import Server from "./server";
import { address } from 'ip';
import Dotenv from 'dotenv';
Dotenv.config();

const ip = address();
const port = process.env.PORT || 3000;

const server = new Server()
server.loadData();
const app = server.getApp();
app.listen(port, () => console.log(`
---> Server started in http://${ip}:${port} or http://localhost:${port}
`));
