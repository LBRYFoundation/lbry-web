import React, {JSX} from "react";

function Footer(): JSX.Element {
    return (
        <footer>
            <span>&copy; {new Date().getFullYear().toString()} LBRY Foundation</span>
        </footer>
    );
}

export default Footer;
