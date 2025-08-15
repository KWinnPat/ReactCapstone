import { useAppInfo } from "./useAppInfo";
import { useState, useEffect, useMemo } from "react";

export function useFilterSortProducts(
  filter = "",
  sortCategory = "id",
  sortDirection = "asc"
) {
  const { products } = useAppInfo();
  "Products from context:", products;
  "Hook params:",
    {
      filter,
      sortCategory,
      sortDirection,
    };

  const filteredSortedProducts = useMemo(() => {
    let result = products;

    if (filter) {
      result = Object.fromEntries(
        Object.entries(products).filter(
          ([_, value]) => value.category === filter
        )
      );
    }

    const toSort = result ? Object.values(result) : [];
    "Products after filtering:", toSort;

    toSort.sort((a, b) => {
      const aVal = a[sortCategory];
      const bVal = b[sortCategory];

      if (aVal === undefined || bVal === undefined) return 0;

      if (typeof aVal === "number" && typeof bVal === "number") {
        return sortDirection === "asc" ? aVal - bVal : bVal - aVal;
      }

      if (typeof aVal === "string" && typeof bVal === "string") {
        return sortDirection === "asc"
          ? aVal.localeCompare(bVal)
          : bVal.localeCompare(aVal);
      }

      const strA = String(aVal);
      const strB = String(bVal);
      return sortDirection === "asc"
        ? strA.localeCompare(strB)
        : strB.localeCompare(strA);
    });

    return toSort;
  }, [products, filter, sortCategory, sortDirection]);
  return {
    filteredSortedProducts,
  };
}
