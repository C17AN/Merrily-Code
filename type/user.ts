export type User = {
  profile: Profile;
  portfolio: Portfolio;
};

export type Profile = {
  name?: string;
  nickName?: string;
  description?: string;
  email?: string;
  image?: string;
  sns?: SNS;
};

export type SNSName = "github" | "facebook" | "linkedIn" | "instagram" | "homepage";

export type SNS = Record<SNSName, string>;

export type Portfolio = {
  heading: string;
  description: string;
};
