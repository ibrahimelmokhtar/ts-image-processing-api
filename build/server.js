"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_config_1 = require("./server/server.config");
// express app will listen to specific port:
server_config_1.app.listen(server_config_1.port, () => {
    console.log(`Server is running at ${server_config_1.host}:${server_config_1.port}/`);
});
