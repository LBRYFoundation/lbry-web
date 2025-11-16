import React, {ReactElement, StrictMode} from 'react';
import {createRoot, Root} from 'react-dom/client';
import {Route, Routes} from 'react-router';

import App from './App';
import AppRouter from './AppRouter';
import ClaimPage from "./ClaimPage";
import NotFound from './NotFound';
import SearchPage from "./SearchPage";
import SettingsPage from "./SettingsPage";
import WalletPage from "./WalletPage";
import Footer from "./components/Footer";
import Header from "./components/Header";

import './main.css';

const root: Root = createRoot(document.getElementById('root'));

const element: ReactElement = (
    <StrictMode>
        <AppRouter>
            <Header/>
            <main>
                <Routes>
                    <Route index path="/" element={<App/>}/>
                    <Route path="/about" element={<App/>}/>
                    <Route path="/claim/*" element={<ClaimPage/>}/>
                    <Route path="/wallet" element={<WalletPage/>}/>
                    <Route path="/search" element={<SearchPage/>}/>
                    <Route path="/settings" element={<SettingsPage/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </main>
            <Footer/>
        </AppRouter>
    </StrictMode>
);

root.render(element);
