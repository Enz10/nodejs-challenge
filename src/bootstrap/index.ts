import {ValidationPipe} from '@nestjs/common'
import {NestFactory} from '@nestjs/core'

import {AppModule} from './app.module'
import {createLogger} from './config/logger'
import {useSwagger} from './config/swagger'

export default async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const logger = createLogger(app, '*')

  app.useLogger(logger)
  app.enableCors({
    maxAge: 86400
  })

  await useSwagger(app)

  await app
    .useGlobalPipes(
      new ValidationPipe({transform: true, forbidUnknownValues: false})
    )
    .listen(3000)

  logger.log('Application running on port 3000')
}
