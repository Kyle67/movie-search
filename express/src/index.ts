import "./pre-start"; // Must be the first import
import logger from "jet-logger";

import EnvVars from "@src/constants/EnvVars";
import server from "./server";
import { NodeEnvs } from "./constants/misc";

// **** Run **** //

const SERVER_START_MSG =
  "Express server started on port: " + EnvVars.Port.toString();

// server.listen(EnvVars.Port, () => logger.info(SERVER_START_MSG));
server.listen(EnvVars.Port, () => logger.info(SERVER_START_MSG));

const winston = require("winston");

const winstonLogger = winston.loggers.add("logger", {
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "user-service" },
  transports: [
    // Write all logs with importance level of error or less to error.log
    // Write all logs with importance level of info or less to combined.log
    new winston.transports.File({ filename: "error.log", level: "error" }),
    new winston.transports.File({ filename: "combined.log" }),
    new winston.transports.Console({ format: winston.format.simple() }),
  ],
});

// winstonLogger.info("hello");
// winstonLogger.log("error", "whoops", { message: "Testing errors" });
