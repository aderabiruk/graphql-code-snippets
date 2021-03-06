import { createLogger, transports, format } from 'winston'

export default createLogger({
  level: 'info',
  silent: false,
  format: format.combine(
    format.timestamp(),
    format.json(),
    format.prettyPrint()
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: './logs/error.log', level: 'error' }),
    new transports.File({ filename: './logs/info.log', level: 'info' })
  ],
  exceptionHandlers: [
    new transports.Console(),
    new transports.File({ filename: './logs/error.log', level: 'error' })
  ]
})
