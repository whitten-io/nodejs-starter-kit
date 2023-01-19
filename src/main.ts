import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as RED from "node-red";

const port = 3000;

const settings = {
  httpAdminRoot: "/red",
  httpNodeRoot: "/api",
  userDir: "./dist",
  nodesDir: "./dist/nodes",
  functionGlobalContext: {
    config: {},
    secrets: {},
    logs: {},
    storage: {},
  },
  uiPort: port,
  uiHost: "",
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // RED.events
  // RED.actions
  //
  RED.init(app.getHttpServer(), settings);
  // Serve the editor UI from /red
  app.use(settings.httpAdminRoot, RED.httpAdmin);
  // Serve the http nodes UI from /api
  app.use(settings.httpNodeRoot, RED.httpNode);
  //
  await app.listen(port);
  //
  RED.start();
}

bootstrap();
