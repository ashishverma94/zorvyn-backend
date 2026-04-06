import { Request, Response, NextFunction } from "express";
import * as authService from "./auth.service.js";

export const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await authService.registerUser(req.body);

    res.status(201).json({
      success: true,
      data: user,
    });
  } catch (err) {
    next(err);
  }
};

export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await authService.loginUser(req.body);

    res.json({
      success: true,
      data,
    });
  } catch (err) {
    next(err);
  }
};

export const getMe = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await authService.getCurrentUser(req.user!.userId);

    res.json({
      success: true,
      data: user,
    });
  } catch (err) {
    next(err);
  }
};