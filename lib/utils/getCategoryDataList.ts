import category from "data/category";
import Category from "type/Category";

// TODO: Flatmap을 사용한 리팩터링
const getCategoryDataList = (): Category[] => {
  const categoryArray = Object.values(category);
  return categoryArray.reduce((categoryList, mainCategory) => {
    return categoryList.concat(mainCategory.map((subCategory) => subCategory));
  }, []);
};

export default getCategoryDataList;
