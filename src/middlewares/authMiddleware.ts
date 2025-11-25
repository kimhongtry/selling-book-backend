// import { Request, Response, NextFunction } from "express";
// import jwt from "jsonwebtoken";
// import { JwtPayload } from "../types/userRole";

// export interface AuthRequest extends Request {
//   user?: {
//     id: string;
//     role: { name: string };
//     email: string;
//     name: string;
//   };
// }

// // // create role middleware here then go to define routes for Admin
// export const roleCheck = (allowedRoles: string[]) => {
//   return (req: AuthRequest, res: Response, next: NextFunction) => {
//     try {
//       const authHeader = req.headers.authorization;
//       if (!authHeader?.startsWith("Bearer ")) {
//         return res
//           .status(401)
//           .json({ message: "Unauthorized: No token provided" });
//       }

//       const token = authHeader.split(" ")[1];
//       const secret = process.env.JWT_SECRET!;
//       const decoded = jwt.verify(token, secret) as JwtPayload;

//       const sanitizedUser = {
//         id: decoded.id,
//         role: { name: decoded.role }, // keep object if needed
//         email: decoded.email,
//         Name: decoded.name,
//       };

//       console.log("User role:", decoded.role);
//       console.log("Allowed roles:", allowedRoles);

//       if (!allowedRoles.includes(decoded.role)) {
//         return res
//           .status(403)
//           .json({ message: "Forbidden: Insufficient role" });
//       }

//       next();
//     } catch (error) {
//       return res.status(401).json({ message: "Unauthorized: Invalid token" });
//     }
//   };
// };
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export interface AuthRequest extends Request {
  user?: {
    id: string;
    role: { name: string };
    email: string;
    name: string;
  };
}

export const roleCheck = (allowedRoles: string[]) => {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
      const authHeader = req.headers.authorization;
      if (!authHeader?.startsWith("Bearer ")) {
        return res
          .status(401)
          .json({ message: "Unauthorized: No token provided" });
      }

      const token = authHeader.split(" ")[1];
      const secret = process.env.JWT_SECRET!;
      const decoded = jwt.verify(token, secret) as any;

      req.user = {
        id: decoded.id,
        role: { name: decoded.role },
        email: decoded.email,
        name: decoded.name,
      };

      // case-insensitive check
      if (
        !allowedRoles
          .map((r) => r.toLowerCase())
          .includes(decoded.role.toLowerCase())
      ) {
        return res
          .status(403)
          .json({ message: "Forbidden: Insufficient role" });
      }

      next();
    } catch (error) {
      return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
  };
};
