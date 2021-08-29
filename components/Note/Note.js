import Link from "next/link";
import {
    Card,
    Title,
    Description,
    Button,
} from "./styledNote";

export const Note = ({ notes }) => {
    return (
        <div>
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
        </div>
    );
};