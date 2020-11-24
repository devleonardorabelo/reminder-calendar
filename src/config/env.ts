/* eslint-disable import/no-mutable-exports */

import { EnvType, load } from 'ts-dotenv';

export type Env = EnvType<typeof schema>;

export const schema = {
  NODE_ENV: String,
  REACT_APP_API_URL: String,
  REACT_APP_API_KEY: String,
};

export let env: Env;

export function loadEnv(): void {
  env = load(schema);
}
