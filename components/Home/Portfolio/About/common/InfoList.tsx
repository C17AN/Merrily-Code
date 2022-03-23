import React from "react";
import InfoItem, { InfoItemProps as InfoItemType } from "./InfoItem";

interface InfoListProps {
  itemList: InfoItemType[];
}

const InfoList = ({ itemList }: InfoListProps) => {
  return (
    <>
      {itemList.map((item) => {
        const { icon, title, description, startedAt, endedAt } = item;
        return (
          <InfoItem
            key={item.title}
            icon={icon}
            title={title}
            description={description}
            startedAt={startedAt}
            endedAt={endedAt}
          />
        );
      })}
    </>
  );
};

export default InfoList;
