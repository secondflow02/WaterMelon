import header from "./header";
import footer from "./footer";
import { Outlet } from "react-router-dom";

// 3페어 최하영 김진솔
const RootLayout = () => {
  return (
    <>
      <header />
      <Outlet />
      <footer />
    </>
  );
};
export default RootLayout;
