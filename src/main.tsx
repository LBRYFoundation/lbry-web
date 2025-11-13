import {StrictMode} from 'react';
import {createRoot, Root} from 'react-dom/client';
import {Link, Route, Routes} from 'react-router';

import App from './App';
import AppRouter from './AppRouter';
import NotFound from './NotFound';

import './main.css';
import SettingsPage from "./SettingsPage";
import WalletPage from "./WalletPage";

const root: Root = createRoot(document.getElementById('root'));

root.render(
    <StrictMode>
        <AppRouter>
            <header>
                <Link to="/" id="header-name">
                    <b>LBRY Web</b>
                </Link>
                <Link to="/settings" id="header-settings">
                    <button>Settings</button>
                </Link>
                <Link to="/wallet" id="header-wallet">
                    <button>Wallet</button>
                </Link>
                {/*<div id="header-settings"><b>LBRY Web</b></div>*/}
            </header>
            <main>
                <Routes>
                    <Route index path="/" element={<App/>}/>
                    <Route path="/about" element={<App/>}/>
                    <Route path="/wallet" element={<WalletPage/>}/>
                    <Route path="/settings" element={<SettingsPage/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </main>
            <footer>&copy; {new Date().getFullYear().toString()} LBRY Foundation</footer>
        </AppRouter>
    </StrictMode>
);
