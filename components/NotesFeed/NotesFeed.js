import { Note } from "..";
import {
    Container,
} from "./styledNotesFeed";

export const NotesFeed = ({ notes }) => {
    return (
        <Container>
            {notes.map(({ _id, title, description }) => (
                <Note
                    key={_id}
                    title={title}
                    description={description}
                    notes={notes}
                />
            ))}

        </Container>
    );
};