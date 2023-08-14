import express from "express";
import cluster from "cluster";
import os from "os";

import config, { Environment } from "./config";
import userRoutes from "./routes/user";
import authRoutes from "./routes/auth";
import { publisher, subscriber } from "./libs/redis";

if (cluster.isPrimary) {
  let cpuCount = os.cpus().length;

  if (config.env == Environment.Development) {
    cpuCount = 1;
  }

  for (let i = 0; i < cpuCount; i++) {
    cluster.fork();
  }
} else {
  const app = express();

  app.use("/api/v1/user", userRoutes);
  app.use("/api/v1/auth", authRoutes);

  const start = async () => {
    await subscriber.connect();
    await publisher.connect();

    app.listen(config.port, () => {
      console.log(
        `Server (${process.pid}) is listening on port ${config.port} in ${config.env}`,
      );
    });
  };

  start();
}
