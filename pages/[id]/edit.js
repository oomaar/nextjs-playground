import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import fetch from 'isomorphic-unfetch';
import { Main } from "../../Global/styles/styledIndexPage";
import { HeadTag } from "../../Global";
import { setTextareaHeight } from "../../utils/setTextareaHeight";
import {
    Container,
    SubContainer,
    Title,
    Form,
    InputContainer,
    Input,
    TextArea,
    Button,
    Label
} from "../../Global/styles/styledNewPage";

const EditNote = ({ note }) => {
    const [form, setForm] = useState({ title: note.title, description: note.description });
    const [isSubmit, setIsSubmit] = useState(false);
    const [err, setErr] = useState({});
    const router = useRouter();

    const createNote = async () => {
        try {
            const res = await fetch(`http://localhost:3000/api/notes/${router.query.id}`, {
                method: 'PUT',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            });

            router.push("/");
        } catch (err) {
            console.error(err);
        };
    };

    useEffect(() => {
        if (isSubmit) {
            if (Object.keys(err).length === 0) {
                createNote();
            } else {
                setIsSubmit(false);
            };
        };
    }, [err]);

    const validate = () => {
        let err = {};

        if (!form.title) {
            err.title = 'Title is required !';
        };

        if (!form.description) {
            err.description = 'Description is reduired !';
        };

        return err;
    };

    const handleSubmit = e => {
        e.preventDefault();
        let errs = validate();
        setErr(errs);
        setIsSubmit(true);
    };

    const handleChangeTextArea = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
        e.preventDefault();
        setTextareaHeight(e, "150px");
    };

    const handleChangeInput = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    return (
        <Main>
            <HeadTag />
            <Container>
                <Title>Update Note</Title>

                <SubContainer>
                    {isSubmit ? (
                        <h1>Loading....</h1>
                    ) : (
                        <Form onSubmit={handleSubmit}>
                            <InputContainer>
                                <Label>Title</Label>
                                <Input
                                    label="Title"
                                    name="title"
                                    onChange={handleChangeInput}
                                    required
                                    value={form.title}
                                />
                            </InputContainer>
                            <InputContainer>
                                <Label>Description</Label>
                                <TextArea
                                    name="description"
                                    onChange={handleChangeTextArea}
                                    required
                                    value={form.description}
                                />
                            </InputContainer>
                            <Button type="submit">Update</Button>
                        </Form>
                    )}
                </SubContainer>
            </Container>
        </Main>
    );
};

EditNote.getInitialProps = async ({ query: { id } }) => {
    const link = `http://localhost:3000/api/notes/${id}` || `https://next-noteapp-djklfelo2-oomaar.vercel.app/${id}`;
    const res = await fetch(`${link}`);
    const { data } = await res.json();

    return {
        note: data
    };
};

export default EditNote;