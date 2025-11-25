import { Request, Response, NextFunction } from "express";

declare global {
  namespace Express {
    interface Request {
      user?: {
        role: { name: string };
        [key: string]: any;
      };
    }
  }
}

// Middleware to allow only specific roles
export const authorizeRoles = (...allowedRoles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = req.user; // assume you attach user in auth middleware
    if (!user) {
      return res.status(401).json({ message: "Not authenticated" });
    }

    if (!allowedRoles.includes(user.role.name)) {
      return res.status(403).json({ message: "Forbidden: Insufficient role" });
    }

    next();
  };
};
