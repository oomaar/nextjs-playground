import { GlobalStyle } from "../global/GlobalStyle";

export default function App({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    );
};