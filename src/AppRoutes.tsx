import React, { JSX } from "react";
import { Route, Routes } from "react-router";
import NotFound from "~/NotFound";
import ClaimPage from "~/pages/ClaimPage";
import Discover from "~/pages/Discover";
import Following from "~/pages/Following";
import Home from "~/pages/Home";
import Library from "~/pages/Library";
import Lists from "~/pages/Lists";
import SearchPage from "~/pages/SearchPage";
import SettingsPage from "~/pages/SettingsPage";
import Tags from "~/pages/Tags";
import WalletPage from "~/pages/WalletPage";

function AppRoutes(): JSX.Element {
  return (
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
  );
}

export default AppRoutes;
