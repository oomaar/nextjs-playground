import { HeadTag } from "../Global";
import fetch from "isomorphic-unfetch";
import { Main } from "../Global/styles/styledIndexPage";
import { NotesFeed } from "../components";

export default function Home({ notes }) {
  return (
    <div>
      <HeadTag />

      <Main>
        <NotesFeed notes={notes} />
      </Main>
    </div>
  );
};

Home.getInitialProps = async () => {
  const link = `http://localhost:3000/api/notes` || `https://next-noteapp-nine.vercel.app/api/notes`;
  const res = await fetch(`${link}`);
  const { data } = await res.json();

  return { notes: data };
};