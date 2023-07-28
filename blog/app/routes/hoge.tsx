import { Outlet } from "@remix-run/react";

export default function Hoge() {
  return (
    <div>
      <p>Hoge</p>
      <Outlet />
    </div>
  );
}
