import TechStack from "type/TechStack";

const TechStackData = {
  frontEnd: [
    {
      name: "javascript",
      icon: "/icons/tech/frontend/javascript.svg",
      title:
        "ES6 문법을 이해하고 있으며, 비동기 처리 등 다양한 자바스크립트 문법 사용에 익숙합니다.",
      descriptionList: [
        "읽기 편한 코드와 성능이 좋은 코드 중에서 항상 고민합니다.",
        "최적화에도 관심이 많아 관련 글이나 개발자 도구도 자주 들여다보곤 합니다.",
        "함수형 프로그래밍에는 아직 익숙하지 않지만, 필요하다면 언제든 배울 준비가 되어 있습니다.",
      ],
    },
    {
      name: "typescript",
      icon: "/icons/tech/frontend/typescript.svg",
      title:
        "타입스크립트를 완벽하게 다루지는 못하지만, 사용 시의 편리함은 명확히 인식하고 있습니다.",
      descriptionList: [
        "개발할 때 목업 데이터보다 데이터 타입을 먼저 정의하려 노력합니다.",
        "any, unknown 타입은 최대한 지양하려 노력합니다. 다만 옵셔널 타입은 적극적으로 사용합니다.",
        "아직 미숙한 부분도 많지만, '타입스크립트 프로그래밍' 이라는 책을 토대로 계속 배워 나가고 있습니다.",
      ],
    },
    {
      name: "react",
      icon: "/icons/tech/frontend/react.svg",
      title: "React 및 Next.js 기반의 소 · 중규모 프로젝트 경험에 익숙합니다.",
      descriptionList: [
        "어떻게 해야 컴포넌트 재활용성이 높아질지, 관리하기 쉬운 구조가 될지 항상 고민합니다.",
        "리액트 기반의 일반적인 웹 어플리케이션 외에도 크롬 익스텐션 개발에도 관심이 많습니다.",
        "Recoil, Redux-saga, Redux-toolkit 등 여러 상태 관리 라이브러리를 다뤄본 경험이 있습니다.",
      ],
    },
    {
      name: "vue",
      icon: "/icons/tech/frontend/vue.svg",
      descriptionList: [],
    },
  ] as TechStack[],
  backEnd: [
    {
      name: "node.js",
      icon: "/icons/tech/backend/node-js.svg",
      descriptionList: [],
    },
    {
      name: "express",
      icon: "/icons/tech/backend/express.svg",
      descriptionList: [],
    },
    {
      name: "mongodb",
      icon: "/icons/tech/backend/mongodb.svg",
      descriptionList: [],
    },
  ] as TechStack[],
  cloud: [
    {
      name: "AWS",
      icon: "/icons/tech/cloud/aws.svg",
      descriptionList: [],
    },
    {
      name: "firebase",
      icon: "/icons/tech/cloud/firebase.svg",
      descriptionList: [],
    },
    {
      name: "naver cloud",
      icon: "/icons/tech/cloud/ncp.svg",
      descriptionList: [],
    },
    {
      name: "heroku",
      icon: "/icons/tech/cloud/heroku.svg",
      descriptionList: [],
    },
  ] as TechStack[],
  devOps: [
    {
      name: "docker",
      icon: "/icons/tech/devops/docker.svg",
      descriptionList: [],
    },
  ] as TechStack[],
  mobile: [
    {
      name: "flutter",
      icon: "/icons/tech/mobile/flutter.svg",
      descriptionList: [],
    },
  ] as TechStack[],
};

export default TechStackData;
