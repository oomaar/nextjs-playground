import Link from "next/link";
import {
    Container,
    Card,
    Title,
    Description,
    Button,
} from "./styledNotesFeed";

export const NotesFeed = ({ notes }) => {
    console.log("🚀 ~ file: NotesFeed.js ~ line 11 ~ NotesFeed ~ notes", notes)
    return (
        <Container>
            {notes.map(note => (
                <Card key={note._id}>
                    <Link href={`${note._id}`}>
                        <Title>{note.title}</Title>
                    </Link>
                    <Description>{note.description}</Description>
                    <Link href={`${note._id}`}>
                        <Button>View</Button>
                    </Link>
                    <Link href={`${note._id}/edit`}>
                        <Button>Edit</Button>
                    </Link>
                </Card>
            ))}
        </Container>
    );
};