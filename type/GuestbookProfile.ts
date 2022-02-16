type GuestbookProfile = {
  image?: string;
  name?: string;
  description?: string;
  primaryColor?: string;
  secondaryColor?: string;
  techStack?: Array<string>;
  visitedAt?: string;
  snsType?: "github" | "homepage";
};

export default GuestbookProfile;
