import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./db/schema/index.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: postgres://default:d87gIZRkmMOD@ep-shiny-wildflower-a4h2zy7m-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require,
  },
  verbose: true,
  strict: true,
});
