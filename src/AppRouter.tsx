import { JSX, PropsWithChildren } from "react";
import { BrowserRouter, MemoryRouter } from "react-router";

const isElectron: boolean = false; // TODO Add detection

function AppRouter({ children }: PropsWithChildren): JSX.Element {
  if (isElectron) {
    return <MemoryRouter>{children}</MemoryRouter>;
  }
  return <BrowserRouter>{children}</BrowserRouter>;
}

export default AppRouter;
