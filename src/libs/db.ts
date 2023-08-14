import { Pool } from "pg";
import config from "../config";

const database = new Pool({ connectionString: config.db });

export default database;
