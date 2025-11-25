import { Router } from "express";
import authRoute from "./authroute";
import roleRoute from "./roleRoute";
import userroleRoute from "./userroleRoute";

const router = Router();

router.use("/auth", authRoute);
router.use("/roles", roleRoute);
router.use("/userroles", userroleRoute);

export default router;
