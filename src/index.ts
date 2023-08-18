import config from "./config/config_env";

import { App } from "./app";

async function main() {
    const app = new App(config.project.port);
    await app.listen();
};

main();