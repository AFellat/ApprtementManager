"use client";

import { categoryColor, expenseLabel } from "@/lib/constants";
import type { BillType, ExpenseCategory } from "@/types/domain";

/**
 * The category cell of the expense tables.
 *
 * A bill shows its type ("Électricité", "Eau") in place of "Bills" — the type
 * is what tells two bills apart. The dot keeps the category's color, so bills
 * still read as one group.
 */
export function ExpenseCategoryCell({
  category,
  billType,
}: {
  category: ExpenseCategory;
  billType: BillType | null;
}) {
  return (
    <span className="flex items-center gap-2">
      <span
        aria-hidden
        className="size-2 shrink-0 rounded-full"
        style={{ background: categoryColor(category) }}
      />
      <span className="min-w-0 truncate text-ink">{expenseLabel(category, billType)}</span>
    </span>
  );
}
