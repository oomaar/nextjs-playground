import { Navbar } from "../components";
import { GlobalStyle, HeadTag } from "../Global";

export default function Home() {
  return (
    <div>
      <HeadTag />
      <GlobalStyle />

      <Navbar />
    </div>
  );
};