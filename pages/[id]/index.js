import fetch from "isomorphic-unfetch";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
    Container,
    SubContainer,
    Title,
    Description,
    DeleteButton,
} from "../../Global/styles/styledNotePage";

const Note = ({ note }) => {
    const [isDeleting, setIsDeleting] = useState(false);
    const router = useRouter();

    const handleDelete = () => {
        setIsDeleting(true);
    };

    useEffect(() => {
        if (isDeleting) {
            deleteNote();
        };
    }, [isDeleting]);

    const deleteNote = async () => {
        const noteId = router.query.id;
        try {
            const deleted = await fetch(`http://localhost:3000/api/notes/${noteId}`, {
                method: "DELETE"
            });

            router.push("/");
        } catch (error) {
            console.error(error);
        };
    };

    return (
        <Container>
            {isDeleting ? (
                <Title>Loading</Title>
            ) : (
                <SubContainer>
                    <Title>{note.title}</Title>
                    <Description>{note.description}</Description>
                    <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
                </SubContainer>
            )}
        </Container>
    );
};

export default Note;

// destructure context object
Note.getInitialProps = async ({ query: { id } }) => {
    const link = `http://localhost:3000/api/notes/${id}` || `https://next-noteapp-nine.vercel.app/api/notes/${id}`;
    const res = await fetch(`${link}`);
    const { data } = await res.json();

    return {
        note: data
    };
};