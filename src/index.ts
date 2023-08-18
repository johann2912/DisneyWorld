import { App } from "./app";
import config from "./config/config_env";

async function main() {
    const app = new App(config.project.port);
    await app.listen();
};

main();