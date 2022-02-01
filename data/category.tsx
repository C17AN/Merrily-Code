import { FaAws, FaDocker, FaNodeJs, FaReact, FaVuejs } from "react-icons/fa";
import {
  SiAzuredevops,
  SiDart,
  SiFlutter,
  SiGo,
  SiJava,
  SiJavascript,
  SiKubernetes,
  SiMysql,
  SiNestjs,
  SiPython,
  SiTypescript,
} from "react-icons/si";
import { DiAndroid, DiApple, DiGoogleCloudPlatform, DiMysql, DiRedis } from "react-icons/di";
import { RiComputerFill } from "react-icons/ri";
import { AiFillDatabase } from "react-icons/ai";
import { GiFamilyTree, GiWifiRouter } from "react-icons/gi";
import { BsCodeSlash, BsHddNetworkFill, BsKeyboard } from "react-icons/bs";
import { IoMdRestaurant } from "react-icons/io";
import { GiMusicalNotes } from "react-icons/gi";
import { IoLanguage } from "react-icons/io5";
import { BiNote } from "react-icons/bi";
import { MdOutlineConstruction, MdOutlineRouter } from "react-icons/md";

const category = {
  "포스트 모아보기": [
    {
      displayName: "전체 포스트",
      icon: <BiNote />,
      categoryName: "all",
    },
    {
      displayName: "번역 포스트",
      icon: <IoLanguage />,
      categoryName: "translate",
    },
    {
      displayName: "개발 기록 포스트",
      icon: <MdOutlineConstruction />,
      categoryName: "development",
    },
  ],
  프론트엔드: [
    { displayName: "React", icon: <FaReact />, categoryName: "react" },
    { displayName: "Vue", icon: <FaVuejs />, categoryName: "vue" },
    { displayName: "TypeScript", icon: <SiTypescript />, categoryName: "typescript" },
    // { displayName: "최적화", icon: <SiTypescript />, categoryName: "optimization" },
  ],
  백엔드: [
    { displayName: "Node.js", icon: <FaNodeJs />, categoryName: "nodejs" },
    { displayName: "Nest.js", icon: <SiNestjs />, categoryName: "nestjs" },
    { displayName: "Redis", icon: <DiRedis />, categoryName: "redis" },
  ],
  // 모바일: [
  //   { displayName: "Flutter", icon: <SiFlutter />, categoryName: "flutter" },
  //   { displayName: "React Native", icon: <DiAndroid />, categoryName: "rn" },
  // ],
  클라우드: [
    { displayName: "AWS", icon: <FaAws />, categoryName: "aws" },
    { displayName: "Azure", icon: <SiAzuredevops />, categoryName: "azure" },
    { displayName: "Google Cloud", icon: <DiGoogleCloudPlatform />, categoryName: "gcp" },
  ],
  데브옵스: [
    { displayName: "Docker", icon: <FaDocker />, categoryName: "docker" },
    { displayName: "Kubernetes", icon: <SiKubernetes />, categoryName: "kubernetes" },
    { displayName: "CI / CD ", icon: <BsHddNetworkFill />, categoryName: "cicd" },
  ],
  컴퓨터공학: [
    { displayName: "운영체제", icon: <RiComputerFill />, categoryName: "os" },
    { displayName: "데이터베이스", icon: <AiFillDatabase />, categoryName: "database" },
    { displayName: "자료구조", icon: <GiFamilyTree />, categoryName: "ds" },
    { displayName: "네트워크", icon: <GiWifiRouter />, categoryName: "network" },
  ],
  언어: [
    { displayName: "JavaScript", icon: <SiJavascript />, categoryName: "javascript" },
    { displayName: "Dart", icon: <SiDart />, categoryName: "dart" },
    { displayName: "Java", icon: <SiJava />, categoryName: "java" },
    { displayName: "Python", icon: <SiPython />, categoryName: "python" },
    { displayName: "Go", icon: <SiGo />, categoryName: "go" },
  ],
  알고리즘: [
    { displayName: "백준 온라인 저지", icon: <BsCodeSlash />, categoryName: "boj" },
    { displayName: "프로그래머스", icon: <BsKeyboard />, categoryName: "programmers" },
  ],
  기타: [
    { displayName: "공연", icon: <GiMusicalNotes />, categoryName: "show" },
    { displayName: "맛집 기록", icon: <IoMdRestaurant />, categoryName: "eat" },
  ],
};

export default category;
