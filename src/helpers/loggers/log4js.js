import log4js from 'log4js'

const logger = log4js.getLogger()
logger.level = 'debug'

export function debug (log) {
  logger.debug(log)
}

export function fatal (log) {
  logger.fatal(log)
}

export function info (log) {
  logger.info(log)
}

export function warn (log) {
  logger.warn(log)
}
