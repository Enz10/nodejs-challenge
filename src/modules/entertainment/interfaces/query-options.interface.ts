export interface QueryOptions {
  order?: {
    [key: string]: 'ASC' | 'DESC'
  }
  where?: any
}
