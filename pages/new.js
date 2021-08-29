import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import fetch from 'isomorphic-unfetch';
import { Main } from "../Global/styles/styledIndexPage";
import { HeadTag } from "../Global";
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
} from "../Global/styles/styledNewPage";

const NewNote = () => {
    const [form, setForm] = useState({ title: '', description: '' });
    const [isSubmit, setIsSubmit] = useState(false);
    const [err, setErr] = useState({});
    const router = useRouter();

    const createNote = async () => {
        try {
            const res = await fetch("http://localhost:3000/api/notes", {
                method: 'POST',
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
    }

    const handleSubmit = e => {
        e.preventDefault();
        let errs = validate();
        setErr(errs);
        setIsSubmit(true);
    };

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
        e.preventDefault();
    };

    return (
        <Main>
            <HeadTag />
            <Container>
                <Title>Create Note</Title>

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
                                    onChange={handleChange}
                                    required
                                />
                            </InputContainer>
                            <InputContainer>
                                <Label>Description</Label>
                                <TextArea
                                    name="description"
                                    onChange={handleChange}
                                    required
                                />
                            </InputContainer>
                            <Button type="submit">Create</Button>
                        </Form>
                    )}
                </SubContainer>
            </Container>
        </Main>
    )
}

export default NewNote;
