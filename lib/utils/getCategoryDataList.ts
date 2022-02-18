import categoryData from "data/category";
import Category from "type/Category";

// TODO: Flatmap을 사용한 리팩터링
const getCategoryDataList = (): any => {
  const categoryArray = Object.values(categoryData);

  return categoryArray.reduce((categoryList: Category[], mainCategory) => {
    if (Array.isArray(mainCategory)) {
      return categoryList.concat(mainCategory.map((subCategory) => subCategory));
    } else {
      return categoryList.concat(mainCategory);
    }
  }, []);
};

export default getCategoryDataList;
