import { Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({ component: RootRoute });

function RootRoute() {
  return (
    <>
      <div className="grid h-screen w-full place-items-center bg-zinc-800 text-white">
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </>
  );
}
