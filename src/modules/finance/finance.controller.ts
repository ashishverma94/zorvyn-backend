import { Response, NextFunction } from "express";
import * as financeService from "./finance.service.js";

export const createRecord = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {

    console.log("hi")
    const record = await financeService.createRecord(
      req.body,
      (req as any).user!.userId
    );

    res.status(201).json({
      success: true,
      data: record,
    });
  } catch (err) {
    next(err);
  }
};

export const getRecords = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await financeService.getRecords(
      (req as any).query,
      (req as any).user!.userId
    );

    res.json({
      success: true,
      ...data,
    });
  } catch (err) {
    next(err);
  }
};

export const updateRecord = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const record = await financeService.updateRecord(
      (req as any).params.id as string,
      req.body,
      (req as any).user!.userId
    );

    res.json({
      success: true,
      data: record,
    });
  } catch (err) {
    next(err);
  }
};

export const deleteRecord = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await financeService.deleteRecord(
      (req as any).params.id as string,
      (req as any).user!.userId
    );

    res.json({
      success: true,
      message: "Record deleted",
    });
  } catch (err) {
    next(err);
  }
};