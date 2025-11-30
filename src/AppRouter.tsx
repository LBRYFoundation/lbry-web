import { JSX, PropsWithChildren } from "react";
import { BrowserRouter, MemoryRouter, StaticRouter } from "react-router";

const isElectron: boolean = false; // TODO Add detection

function AppRouter({
                     url,
                     children,
                   }: PropsWithChildren & { url?: string }): JSX.Element {
  if (isElectron) {
    return <MemoryRouter>{children}</MemoryRouter>;
  }
  if (import.meta.env.SSR) {
    return <StaticRouter location={url}>{children}</StaticRouter>;
  }
  return <BrowserRouter>{children}</BrowserRouter>;
}

export default AppRouter;
