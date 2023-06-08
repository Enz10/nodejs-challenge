import {z} from 'zod'

export const TypeOrmConfig = z
  .object({
    POSTGRES_DB_USER: z.string(),
    POSTGRES_DB_PASSWORD: z.string(),
    POSTGRES_DB_DATABASE: z.string(),
    POSTGRES_DB_HOST: z.string(),
    POSTGRES_DB_PORT: z.string()
  })
  .transform(data => ({
    username: data.POSTGRES_DB_USER,
    password: data.POSTGRES_DB_PASSWORD,
    database: data.POSTGRES_DB_DATABASE,
    host: data.POSTGRES_DB_HOST,
    port: Number(data.POSTGRES_DB_PORT),
  }))

export type TypeOrmConfig = z.infer<typeof TypeOrmConfig>
