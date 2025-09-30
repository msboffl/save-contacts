import { Outlet } from "react-router";

export function AuthLayout() {
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="bg-custom-blue-50 flex h-4/5 w-7xl flex-col items-center justify-center">
          <Outlet />
        </div>
      </div>
    </>
  );
}
