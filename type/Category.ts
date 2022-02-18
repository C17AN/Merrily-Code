import { ReactNode } from "react";

export type MainCategory =
  | "전체 포스트"
  | "프론트엔드"
  | "백엔드"
  | "모바일"
  | "클라우드"
  | "데브옵스"
  | "오픈소스"
  | "컴퓨터공학"
  | "언어"
  | "알고리즘"
  | "기타";

type Category = {
  icon: ReactNode;
  displayName: string;
  categoryName: string;
};

export default Category;
