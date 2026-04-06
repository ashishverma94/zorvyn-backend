import { Response, NextFunction } from "express";
import * as dashboardService from "./dashboard.service";
import { AuthRequest } from "../../middleware/auth";

export const getSummary = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await dashboardService.getDashboardSummary(
      req.user!.userId
    );

    res.json({
      success: true,
      data,
    });
  } catch (err) {
    next(err);
  }
};

export const getCategory = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await dashboardService.getCategoryBreakdown(
      req.user!.userId
    );

    res.json({
      success: true,
      data,
    });
  } catch (err) {
    next(err);
  }
};

export const getTrends = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await dashboardService.getMonthlyTrends(
      req.user!.userId
    );

    res.json({
      success: true,
      data,
    });
  } catch (err) {
    next(err);
  }
};