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
import Following from "./Following";
import Tags from "./Tags";
import Discover from "./Discover";
import Library from "./Library";
import Lists from "./Lists";
// import Footer from "./components/Footer";

function App(): JSX.Element{
    const [isMenuOpen,setMenuOpen] = useState(false);
    const [isMenuShown] = useState(true);

    return (
        <StrictMode>
            <AppRouter>
                <Header menuOpen={isMenuOpen} menuOpenSetter={setMenuOpen}/>
                {isMenuShown?<Aside open={isMenuOpen}/>:null}
                <main>
                    <Routes>
                        <Route index path="/" element={<Home/>}/>
                        <Route index path="/following" element={<Following/>}/>
                        <Route index path="/tags" element={<Tags/>}/>
                        <Route index path="/discover" element={<Discover/>}/>
                        <Route index path="/library" element={<Library/>}/>
                        <Route index path="/lists" element={<Lists/>}/>

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
