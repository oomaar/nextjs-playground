import Link from "next/link";
import {
    Container,
    Card,
    Title,
    Description,
    Button,
} from "./styledNotesFeed";

export const NotesFeed = ({ notes }) => {
    return (
        <Container>
            {notes.map(note => (
                <Card key={note._id}>
                    <Link href={`${note.id}`}>
                        <Title>{note.title}</Title>
                    </Link>
                    <Description>{note.description}</Description>
                    <Link href={`${note.id}`}>
                        <Button>View</Button>
                    </Link>
                    <Link href={`${note.id}/edit`}>
                        <Button>Edit</Button>
                    </Link>
                </Card>
            ))}
        </Container>
    );
};