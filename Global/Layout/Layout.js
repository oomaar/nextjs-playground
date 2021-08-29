import { Navbar } from "../../components"
import { GlobalStyle } from "../styles/GlobalStyle";

export const Layout = ({ children }) => {
    return (
        <div>
            <GlobalStyle />
            <Navbar />
            {children}
        </div>
    );
};