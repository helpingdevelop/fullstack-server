import { createClient } from "redis";
import config from "../config";

export const subscriber = createClient({ url: config.redis });
export const publisher = subscriber.duplicate();
