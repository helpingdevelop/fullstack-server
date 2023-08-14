export enum Environment {
  Development = "development",
  Production = "production",
  Test = "test",
  Staging = "staging",
}

export default {
  port: Number(process.env.PORT),
  env: process.env.NODE_ENV,
  db: process.env.DATABASE_URL,
  redis: process.env.REDIS_URL,
};
