import express from "express";
import routes from "./router/routes";
const app = express();
const port = 5000;
const host = "localhost";

class App {
    public server;

    constructor() {
        this.server = express();
        this.middlewares();
        this.routes();
    }

    routes() {
        this.server.use(routes);
    }

    middlewares() {
        this.server.use(express.json());
    }
}

export default new App().server;
