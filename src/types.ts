// Define this in a file like types.ts
import { Request } from 'express';

export interface AuthenticatedRequest extends Request {
  user: {
    userId: string;
    username: string;
    // Add more fields if your validate() returns more
  };
}
