import React, { JSX, StrictMode, useState } from "react";
import Props from "react";
import AppRouter from "~/AppRouter";
import AppRoutes from "~/AppRoutes";
import Aside from "~/components/Aside";
import Header from "~/components/Header";

// import Footer from "~/components/Footer";

function App({ url }: Props & { url?: string }): JSX.Element {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  const [isMenuShown] = useState<boolean>(true);

  return (
    <StrictMode>
      <AppRouter url={url}>
        <Header menuOpen={isMenuOpen} menuOpenSetter={setMenuOpen} />
        {isMenuShown ? <Aside open={isMenuOpen} /> : null}
        <main>
          <AppRoutes />
        </main>
        {/*<Footer/>*/}
      </AppRouter>
    </StrictMode>
  );
}

export default App;
