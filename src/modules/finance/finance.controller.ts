import { Response, NextFunction } from "express";
import * as financeService from "./finance.service";
import { AuthRequest } from "../../middleware/auth";

export const createRecord = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {

    console.log("hi")
    const record = await financeService.createRecord(
      req.body,
      req.user!.userId
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
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await financeService.getRecords(
      req.query,
      req.user!.userId
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
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const record = await financeService.updateRecord(
      req.params.id as string,
      req.body,
      req.user!.userId
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
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    await financeService.deleteRecord(
      req.params.id as string,
      req.user!.userId
    );

    res.json({
      success: true,
      message: "Record deleted",
    });
  } catch (err) {
    next(err);
  }
};