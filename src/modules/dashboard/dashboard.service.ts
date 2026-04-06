import { prisma } from "../../config/prisma.js";

export const getDashboardSummary = async (userId: string) => {
  // Total Income
  const totalIncome = await prisma.financialRecord.aggregate({
    _sum: { amount: true },
    where: {
      userId,
      type: "INCOME",
      isDeleted: false,
    },
  });

  // Total Expense
  const totalExpense = await prisma.financialRecord.aggregate({
    _sum: { amount: true },
    where: {
      userId,
      type: "EXPENSE",
      isDeleted: false,
    },
  });

  const income = totalIncome._sum.amount || 0;
  const expense = totalExpense._sum.amount || 0;

  return {
    totalIncome: Number(income),
    totalExpense: Number(expense),
    netBalance: Number(income) - Number(expense),
  };
};

// Category-wise totals
export const getCategoryBreakdown = async (userId: string) => {
  const data = await prisma.financialRecord.groupBy({
    by: ["category"],
    _sum: { amount: true },
    where: {
      userId,
      isDeleted: false,
    },
  });

  return data.map((item) => ({
    category: item.category,
    total: Number(item._sum.amount),
  }));
};

// Monthly trends
export const getMonthlyTrends = async (userId: string) => {
  const records = await prisma.financialRecord.findMany({
    where: {
      userId,
      isDeleted: false,
    },
    select: {
      amount: true,
      type: true,
      date: true,
    },
  });

  const monthlyData: any = {};

  records.forEach((record) => {
    const month = record.date.toISOString().slice(0, 7); // YYYY-MM

    if (!monthlyData[month]) {
      monthlyData[month] = {
        income: 0,
        expense: 0,
      };
    }

    if (record.type === "INCOME") {
      monthlyData[month].income += Number(record.amount);
    } else {
      monthlyData[month].expense += Number(record.amount);
    }
  });

  return Object.entries(monthlyData).map(([month, value]: any) => ({
    month,
    ...value,
    net: value.income - value.expense,
  }));
};