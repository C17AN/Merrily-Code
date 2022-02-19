import React from "react";
import GitHubCalendar from "react-github-calendar";

type ContributionProps = {
  userName: string;
};

const Contribution = ({ userName }: ContributionProps) => {
  return (
    <GitHubCalendar
      username={userName}
      labels={calendarLabel}
      fontSize={12}
      {...calendarBlockSettings}
      // theme={calendarTheme}
    />
  );
};

const calendarLabel = {
  months: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
  weekdays: ["일", "월", "화", "수", "목", "금", "토"],
  totalCount: "최근 1년간의 커밋 개수 : {{count}}건",
  legend: {
    less: "Less",
    more: "More",
  },
};

// const calendarTheme = {
//   level0: "#fafafa",
//   level1: "#c4d9ed",
//   level2: "#7a8ec7",
//   level3: "#1c89bb",
//   level4: "#383d59",
// };

const calendarBlockSettings = {
  blockMargin: 4,
  blockRadius: 8,
  blockSize: 11,
};

const CustomStyle = {};

export default Contribution;
