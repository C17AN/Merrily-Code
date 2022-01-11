import { useEffect, useState } from "react";

type TechCode = "frontEnd" | "backEnd" | "mobile" | "devOps" | "cloud";
type TechName = "웹 프론트엔드" | "백엔드" | "모바일" | "데브옵스(CI/CD)" | "클라우드" | null;

const enum SlideIndex {
  FRONTEND,
  BACKEND,
  CLOUD,
  DEVOPS,
  MOBILE,
}

const useTechStackCategory = (
  initialIndex: SlideIndex
): {
  techName: TechName | null;
  techCode: TechCode | null;
  setTechSlideIndex: (techSlideIndex: SlideIndex) => void;
} => {
  const [techSlideIndex, setTechSlideIndex] = useState(initialIndex);
  const [techName, setTechName] = useState<TechName | null>(null);
  const [techCode, setTechCode] = useState<TechCode | null>(null);

  const getTechStackCode = (techSlideIndex: SlideIndex): TechCode => {
    switch (techSlideIndex) {
      case SlideIndex.FRONTEND:
        return "frontEnd";
      case SlideIndex.BACKEND:
        return "backEnd";
      case SlideIndex.CLOUD:
        return "cloud";
      case SlideIndex.DEVOPS:
        return "devOps";
      case SlideIndex.MOBILE:
        return "mobile";
    }
  };

  const getTechStackName = (techStackCode: TechCode): TechName => {
    switch (techStackCode) {
      case "frontEnd":
        return "웹 프론트엔드";
      case "backEnd":
        return "백엔드";
      case "cloud":
        return "클라우드";
      case "devOps":
        return "데브옵스(CI/CD)";
      case "mobile":
        return "모바일";
    }
  };

  useEffect(() => {
    const _techStackCode = getTechStackCode(techSlideIndex);
    const _techStackName = getTechStackName(_techStackCode);
    setTechCode(() => _techStackCode);
    setTechName(() => _techStackName);
  }, [techSlideIndex]);

  return { techName, techCode, setTechSlideIndex };
};

export default useTechStackCategory;
