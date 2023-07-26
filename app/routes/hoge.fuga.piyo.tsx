import { Outlet } from "@remix-run/react";

export default function Hoge() {
  return (
    <div>
      <p>Piyo</p>
      <Outlet />
    </div>
  );
}
