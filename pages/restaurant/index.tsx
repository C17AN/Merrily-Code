import React from "react";
import Restaurant from "components/Restaurant";
import fs from "fs";
import path from "path";
import { Restaurant as RestaurantType } from "type/Restaurant";

type RestaurantPageProps = {
  restaurantReviewList: RestaurantType[];
};

const RestaurantPage = ({ restaurantReviewList }: RestaurantPageProps) => {
  return <Restaurant restaurantReviewList={restaurantReviewList} />;
};

export const getStaticProps = async () => {
  const restaurantReviewPath = path.join(process.cwd(), "data/restaurants");
  const restaurantReviewTitleList = fs.readdirSync(restaurantReviewPath);
  const reviewDataList = restaurantReviewTitleList.map((reviewTitle: string) =>
    JSON.parse(fs.readFileSync(path.join(restaurantReviewPath, reviewTitle), "utf-8"))
  );
  return { props: { restaurantReviewList: reviewDataList } };
};

export default RestaurantPage;
