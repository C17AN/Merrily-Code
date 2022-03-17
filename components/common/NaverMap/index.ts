import dynamic from "next/dynamic";

const RenderAfterNavermapsLoaded = dynamic(
  async () => await import("react-naver-maps").then((module) => module.RenderAfterNavermapsLoaded),
  { ssr: false }
);

const NaverMap = dynamic(() => import("react-naver-maps").then((module) => module.NaverMap), {
  ssr: false,
});

const Marker = dynamic(() => import("react-naver-maps").then((module) => module.Marker), {
  ssr: false,
});

export { RenderAfterNavermapsLoaded, NaverMap, Marker };
