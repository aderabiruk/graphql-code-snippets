import app from './app'
import config from './config'
import logger from './helpers/loggers/winston'

const PORT = config.PORT
const API_NAME = config.API_NAME

app.listen(PORT, () => {
  logger.info(`${API_NAME} Running on port ${PORT}`)
})

export default app
