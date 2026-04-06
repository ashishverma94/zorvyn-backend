import { Response, NextFunction } from "express";
import * as dashboardService from "./dashboard.service";

export const getSummary = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await dashboardService.getDashboardSummary(
      (req as any).user!.userId 
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
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await dashboardService.getCategoryBreakdown(
      (req as any).user!.userId
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
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await dashboardService.getMonthlyTrends(
      (req as any).user!.userId
    );

    res.json({
      success: true,
      data,
    });
  } catch (err) {
    next(err);
  }
};