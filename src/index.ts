import * as core from "@actions/core";
import * as dotenv from "dotenv";
import { run } from "./action";

dotenv.config();
console.log(process.env);

run().catch((error) => {
  core.setFailed(error.message);
});
