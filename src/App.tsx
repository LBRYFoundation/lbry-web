import React, {JSX, StrictMode, useState} from "react";
import {Route, Routes} from "react-router";

import AppRouter from "./AppRouter";
import Home from "./Home";
import ClaimPage from "./ClaimPage";
import WalletPage from "./WalletPage";
import SearchPage from "./SearchPage";
import SettingsPage from "./SettingsPage";
import NotFound from "./NotFound";

import Aside from "./components/Aside";
import Header from "./components/Header";
// import Footer from "./components/Footer";

function App(): JSX.Element{
    const [isMenuOpen,setMenuOpen] = useState(false);

   return (
       <StrictMode>
           <AppRouter>
               <Header menuOpen={isMenuOpen} menuOpenSetter={setMenuOpen}/>
               <Aside open={isMenuOpen}/>
               <main>
                   <Routes>
                       <Route index path="/" element={<Home/>}/>
                       <Route path="/about" element={<Home/>}/>
                       <Route path="/claim/*" element={<ClaimPage/>}/>
                       <Route path="/wallet" element={<WalletPage/>}/>
                       <Route path="/search" element={<SearchPage/>}/>
                       <Route path="/settings" element={<SettingsPage/>}/>
                       <Route path="*" element={<NotFound/>}/>
                   </Routes>
               </main>
               {/*<Footer/>*/}
           </AppRouter>
       </StrictMode>
   );
}

export default App;
