import "dotenv/config";

const dbHost = process.env.DATABASE_HOST || "localhost";

export default {
  port: 1337,
  dbUri: `mongodb://${dbHost}:27017/rest-api-tutorial`,
  saltWorkFactor: 10,
  accessTokenTtl: "15m",
  refreshTokenTtl: "1y",
  publicKey: process.env.PUBLIC_KEY,
  privateKey: process.env.PRIVATE_KEY,
};
