// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Request } from 'express';

declare global {
  namespace Express {
    interface Request {
      user?: any; // or replace 'any' with a more specific type for your user object
    }
  }
}
