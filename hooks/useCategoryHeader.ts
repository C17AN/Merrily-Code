import getCategoryDataList from "lib/utils/getCategoryDataList";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const useCategoryData = () => {
  const { query } = useRouter();
  const [categoryHeader, setCategoryHeader] = useState("");
  const categoryList = getCategoryDataList();
  const categoryData = categoryList.find((category) => category.categoryName === query.category);
  const { icon, categoryName, displayName } = categoryData || { icon: null, displayName: null };

  return { icon, categoryName, displayName };
};

export default useCategoryData;
