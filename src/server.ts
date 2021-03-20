import swaggerUi from "swagger-ui-express";

import { app } from ".";
import SwaggerFile from "./swagger.json";

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(SwaggerFile));

app.listen(3333, () => console.log("Server is running!"));
