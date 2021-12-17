import React from "react";
import user from "data/user";
import SNSItem from "./Item";
import { SNS } from "type/user";

const SNSList = () => {
  const { sns } = user.profile;
  const snsList = Object.entries(sns) as Array<SNS>;

  return (
    <ul>
      {snsList.map((sns) => {
        const [name, link] = sns;
        return <SNSItem key={name} name={name} link={link} />;
      })}
    </ul>
  );
};

export default SNSList;
