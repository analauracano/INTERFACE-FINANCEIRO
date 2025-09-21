import type { Category, CategorySummary } from "./category";

export const TransactionType = {
    INCOME: 'income',
    EXPENSE: 'expense'
} as const;

export type TransactionType = typeof TransactionType[keyof typeof TransactionType];

export interface Transaction {
    id: string;
    description: string;
    amount: number;
    date: string | Date;
    type: TransactionType;
    categoryId: string;
    category: Category;
    updatedAt: string | Date;
    createdAt: string | Date;
    userId: string;
}

export interface TransactionFilter {
    month: number;
    year: number;
    categoryId?: string;
    type?: TransactionType;
}

export interface TransactionSummary {
    totalExpenses: number;
    totalIncomes: number;
    totalBalance: number;
    expensesByCategory: CategorySummary[];
}

export interface MonthlyItem {
    name: string;
    expenses: number;
    incomes: number;
}