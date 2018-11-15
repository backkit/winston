const winston = require('winston');

class Logger {
  constructor() {
    winston.configure({
      level: 'verbose',
      transports: [
        new (winston.transports.Console)({
          handleExceptions: false,
          json: true,
          prettyPrint: false,
          stringify: true,
          timestamp: true
        })
      ],
      exitOnError: false
    });
    return winston;
  }
}

module.exports = Logger;