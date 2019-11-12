const winston = require('winston');

class Logger {
  constructor() {
    const formats = {
      flat: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp(),
        winston.format.align(),
        winston.format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
      ),
      json: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
      )
    };
    const logFormat = process.env.LOG_FORMAT && formats[process.env.LOG_FORMAT] ? formats[process.env.LOG_FORMAT] : formats.json;
    const logLevel = process.env.LOG_LEVEL || 'verbose';
    winston.configure({
      format: logFormat,
      level: logLevel,
      transports: [
        new (winston.transports.Console)({
          handleExceptions: false
        })
      ],
      exitOnError: false
    });
    return winston;
  }
}

module.exports = Logger;