import {JSX} from "react";
import {Link} from "react-router";

function Header(): JSX.Element {
    return (
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
        </header>
    );
}

export default Header;
