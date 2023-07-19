import logger from "pino";
import dayjs from "dayjs";

const log = logger({
  //! prettyPrint option is depreciated, use pino-pretty: https://github.com/pinojs/pino-pretty
  // prettyPrint: true,
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
      // translateTime: false,
    },
  },
  base: {
    pid: false,
  },
  timestamp: () => `,"time":"${dayjs().format()}"`,
});

export default log;
