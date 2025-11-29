import React, { JSX, StrictMode, useState } from "react";
import { Route, Routes } from "react-router";
import AppRouter from "~/AppRouter";
import ClaimPage from "~/ClaimPage";
import Discover from "~/Discover";
import Following from "~/Following";
import Home from "~/Home";
import Library from "~/Library";
import Lists from "~/Lists";
import NotFound from "~/NotFound";
import SearchPage from "~/SearchPage";
import SettingsPage from "~/SettingsPage";
import Tags from "~/Tags";
import WalletPage from "~/WalletPage";
import Aside from "~/components/Aside";
import Header from "~/components/Header";

// import Footer from "~/components/Footer";

function App(): JSX.Element {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isMenuShown] = useState(true);

  return (
    <StrictMode>
      <AppRouter>
        <Header menuOpen={isMenuOpen} menuOpenSetter={setMenuOpen} />
        {isMenuShown ? <Aside open={isMenuOpen} /> : null}
        <main>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route index path="/following" element={<Following />} />
            <Route index path="/tags" element={<Tags />} />
            <Route index path="/discover" element={<Discover />} />
            <Route index path="/library" element={<Library />} />
            <Route index path="/lists" element={<Lists />} />

            <Route path="/claim/*" element={<ClaimPage />} />
            <Route path="/wallet" element={<WalletPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/settings" element={<SettingsPage />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        {/*<Footer/>*/}
      </AppRouter>
    </StrictMode>
  );
}

export default App;
