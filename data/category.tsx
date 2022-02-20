import { FaAws, FaDocker, FaNodeJs, FaReact, FaRegHandshake, FaVuejs } from "react-icons/fa";
import {
  SiAzuredevops,
  SiDart,
  SiFlutter,
  SiGo,
  SiJava,
  SiJavascript,
  SiKubernetes,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNuxtdotjs,
  SiPython,
  SiTypescript,
} from "react-icons/si";
import { DiAndroid, DiApple, DiGoogleCloudPlatform, DiMysql, DiRedis } from "react-icons/di";
import { RiComputerFill } from "react-icons/ri";
import { AiFillDatabase, AiOutlineConsoleSql, AiTwotoneExperiment } from "react-icons/ai";
import { GiComputing, GiFamilyTree, GiPlayerNext, GiWifiRouter } from "react-icons/gi";
import { BsCodeSlash, BsHddNetworkFill, BsKeyboard } from "react-icons/bs";
import { IoMdRestaurant } from "react-icons/io";
import { GiMusicalNotes } from "react-icons/gi";
import { IoHardwareChipSharp, IoLanguage } from "react-icons/io5";
import { BiGitPullRequest, BiNote } from "react-icons/bi";
import { MdOutlineConstruction, MdOutlineDesignServices, MdOutlineRouter } from "react-icons/md";
import Category, { MainCategory } from "type/Category";

const category: Record<MainCategory, Category | Category[]> = {
  "전체 포스트": { displayName: "전체 포스트", categoryName: "all" } as Category,
  프론트엔드: [
    { displayName: "React", icon: <FaReact />, categoryName: "react" },
    { displayName: "Next.js", icon: <SiNextdotjs />, categoryName: "next" },
    { displayName: "Vue", icon: <FaVuejs />, categoryName: "vue" },
    // { displayName: "Nuxt.js", icon: <SiNuxtdotjs />, categoryName: "nuxt" },
    { displayName: "TypeScript", icon: <SiTypescript />, categoryName: "typescript" },
    { displayName: "UI Library", icon: <MdOutlineDesignServices />, categoryName: "general" },
    { displayName: "FE Laboratory", icon: <AiTwotoneExperiment />, categoryName: "tech-fe" },
    // { displayName: "최적화", icon: <SiTypescript />, categoryName: "optimization" },
  ] as Array<Category>,
  백엔드: [
    { displayName: "Node.js", icon: <FaNodeJs />, categoryName: "nodejs" },
    { displayName: "Nest.js", icon: <SiNestjs />, categoryName: "nestjs" },
    // { displayName: "Redis", icon: <DiRedis />, categoryName: "redis" },
    // { displayName: "MongoDB", icon: <SiMongodb />, categoryName: "mongodb" },
    { displayName: "SQL", icon: <AiOutlineConsoleSql />, categoryName: "sql" },
  ] as Array<Category>,
  모바일: [
    { displayName: "Flutter", icon: <SiFlutter />, categoryName: "flutter" },
    { displayName: "React Native", icon: <DiAndroid />, categoryName: "rn" },
  ] as Array<Category>,
  클라우드: [
    { displayName: "AWS", icon: <FaAws />, categoryName: "aws" },
    { displayName: "Azure", icon: <SiAzuredevops />, categoryName: "azure" },
    { displayName: "Google Cloud", icon: <DiGoogleCloudPlatform />, categoryName: "gcp" },
    { displayName: "Cloud Technology", icon: <GiComputing />, categoryName: "tech-cloud" },
  ] as Array<Category>,
  데브옵스: [
    { displayName: "Docker", icon: <FaDocker />, categoryName: "docker" },
    { displayName: "Kubernetes", icon: <SiKubernetes />, categoryName: "kubernetes" },
    { displayName: "Microservice", icon: <IoHardwareChipSharp />, categoryName: "microservice" },
    { displayName: "CI / CD ", icon: <BsHddNetworkFill />, categoryName: "cicd" },
  ] as Array<Category>,
  오픈소스: [
    {
      displayName: "컨트리뷰션 기록",
      icon: <FaRegHandshake />,
      categoryName: "contribution",
    },
    {
      displayName: "Git",
      icon: <BiGitPullRequest />,
      categoryName: "git",
    },
  ] as Array<Category>,
  컴퓨터공학: [
    { displayName: "운영체제", icon: <RiComputerFill />, categoryName: "os" },
    { displayName: "데이터베이스", icon: <AiFillDatabase />, categoryName: "database" },
    { displayName: "자료구조", icon: <GiFamilyTree />, categoryName: "ds" },
    { displayName: "네트워크", icon: <GiWifiRouter />, categoryName: "network" },
  ] as Array<Category>,
  언어: [
    { displayName: "JavaScript", icon: <SiJavascript />, categoryName: "javascript" },
    { displayName: "Dart", icon: <SiDart />, categoryName: "dart" },
    { displayName: "Java", icon: <SiJava />, categoryName: "java" },
    { displayName: "Python", icon: <SiPython />, categoryName: "python" },
    { displayName: "Go", icon: <SiGo />, categoryName: "go" },
  ] as Array<Category>,
  알고리즘: [
    { displayName: "백준 온라인 저지", icon: <BsCodeSlash />, categoryName: "boj" },
    { displayName: "프로그래머스", icon: <BsKeyboard />, categoryName: "programmers" },
  ] as Array<Category>,
  기타: [
    { displayName: "공연", icon: <GiMusicalNotes />, categoryName: "show" },
    { displayName: "맛집 기록", icon: <IoMdRestaurant />, categoryName: "eat" },
    { displayName: "회고", icon: <GiPlayerNext />, categoryName: "bio" },
  ] as Array<Category>,
};

export default category;
