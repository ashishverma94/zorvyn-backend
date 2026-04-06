import { prisma } from "../../config/prisma";
import { AppError } from "../../middleware/errorHandler";

export const createRecord = async (data: any, userId: string) => {
  const { amount, type, category, date, notes } = data;

  if (!amount || !type || !category || !date) {
    throw new AppError("Missing required fields", 400);
  }

  const record = await prisma.financialRecord.create({
    data: {
      amount,
      type,
      category,
      date: new Date(date),
      notes,
      userId,
    },
  });

  return record;
};

// GET with filters + pagination
export const getRecords = async (query: any, userId: string) => {
  const {
    type,
    category,
    startDate,
    endDate,
    search,
    page = 1,
    limit = 10,
  } = query;

  const where: any = {
    isDeleted: false,
    userId,
  };

  if (type) where.type = type;
  if (category) where.category = category;

  // ✅ Date filter
  if (startDate || endDate) {
    where.date = {};
    if (startDate) where.date.gte = new Date(startDate);
    if (endDate) where.date.lte = new Date(endDate);
  }

  // 🔥 SEARCH LOGIC (IMPORTANT)
  if (search) {
    where.OR = [
      {
        notes: {
          contains: search,
          mode: "insensitive",
        },
      },
      {
        category: {
          contains: search,
          mode: "insensitive",
        },
      },
    ];
  }

  const records = await prisma.financialRecord.findMany({
    where,
    orderBy: { date: "desc" },
    skip: (Number(page) - 1) * Number(limit),
    take: Number(limit),
  });

  const total = await prisma.financialRecord.count({ where });

  return {
    records,
    total,
    page: Number(page),
    limit: Number(limit),
  };
};

export const updateRecord = async (
  id: string,
  data: any,
  userId: string
) => {
  const record = await prisma.financialRecord.findUnique({
    where: { id },
  });

  if (!record || record.isDeleted) {
    throw new AppError("Record not found", 404);
  }

  if (record.userId !== userId) {
    throw new AppError("Unauthorized", 403);
  }

  return prisma.financialRecord.update({
    where: { id },
    data: {
      ...data,
      date: data.date ? new Date(data.date) : undefined,
    },
  });
};

export const deleteRecord = async (id: string, userId: string) => {
  const record = await prisma.financialRecord.findUnique({
    where: { id },
  });

  if (!record || record.isDeleted) {
    throw new AppError("Record not found", 404);
  }

  if (record.userId !== userId) {
    throw new AppError("Unauthorized", 403);
  }

  return prisma.financialRecord.update({
    where: { id },
    data: {
      isDeleted: true,
      deletedAt: new Date(),
    },
  });
};