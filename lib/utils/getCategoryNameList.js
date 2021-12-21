import category from "data/category";

// TODO: Flatmap을 사용한 리팩터링
const getCategoryNameList = () => {
  const categoryArray = Object.values(category);
  return categoryArray.reduce((categoryList, mainCategory) => {
    return categoryList.concat(mainCategory.map((subCategory) => subCategory.categoryName));
  }, []);
};

export default getCategoryNameList;
