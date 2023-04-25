import app from "./app";
const port = 8888;
const host = "localhost";
import "reflect-metadata";
import AppDataSourceDev from "./data-source";

AppDataSourceDev.initialize()
    .then(() => {
        console.log("Data Source has been initialized!");

        app.listen(port, host, () => {
            console.log(`Server is listening on ${port}`);
        });
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err);
    });
