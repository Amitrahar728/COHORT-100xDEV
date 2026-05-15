import type { NextFunction, Request, Response } from "express";

import jwt from "jsonwebtoken";

import { JWT_PASSWORD } from "./config.js";

export const userMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const header = req.headers["authorization"];
    if (!header) {
        return res.status(403).json({ msg: "You are not logged in" });
    }
    try {
        const decoded = jwt.verify(header as string, JWT_PASSWORD)
        if (typeof decoded === "object" && decoded && "id" in decoded) {
            req.userId = decoded.id;
            next();
        }
    }
    catch (e) {
        res.status(403).json({
            msg: "You are not logged in"
        })
    }
}      



