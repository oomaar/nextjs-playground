import fetch from "isomorphic-unfetch";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
    Container,
} from "../../Global/styles/styledNotePage";

const Note = ({ note }) => {
    const [confirm, setConfirm] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const router = useRouter();

    // const open = () => setConfirm(true);
    // const close = () => setConfirm(false);
    const handleDelete = async () => {
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
                <h1>Loading</h1>
            ) : (
                <div>
                    <h1>{note.title}</h1>
                    <p>{note.description}</p>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            )}
            {/* <div
                open={confirm}
                onCancel={close}
                onConfirm={handleDelete}
            /> */}
        </Container>
    );
};

export default Note;

// destructure context object
Note.getInitialProps = async ({ query: { id } }) => {
    const res = await fetch(`http://localhost:3000/api/notes/${id}`);
    const { data } = await res.json();

    return {
        note: data
    };
};