"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, morgan_1.default)('dev')); //morgan allows me to visualize the requests made to the server, it is a tool to help in the development.
app.use((0, cors_1.default)()); //cors allows you to manage the configuration and connection to other servers.
app.listen(process.env.PORT); //execution of the App on port 3000
console.log('server is runing on port', process.env.PORT);
