import React, { JSX } from "react";
import { Route, Routes } from "react-router";
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
