import {  Outlet, ScrollRestoration } from "react-router";
import { NavBar } from "../../entities/nav-bar";

export const RootRoute = () => {
  return (
    <>
      <header className="container m-auto">       
        <NavBar />
      </header>
      <main className="container m-auto">
        <Outlet />
      </main>
      <ScrollRestoration />
    </>
  );
};
