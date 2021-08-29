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
  const res = await fetch('http://localhost:3000/api/notes');
  const { data } = await res.json();

  return { notes: data };
};