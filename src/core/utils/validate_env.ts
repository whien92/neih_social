import { cleanEnv, num, str } from "envalid";

const validateEnv = () => {
  cleanEnv(process.env, {
    NODE_ENV: str(),
    PORT: num(),
    MONGODB_URI: str(),
  });
};

export default validateEnv;
