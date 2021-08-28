import {
    Nav,
    Logo,
    Button,
} from "./styledNavbar";

export const Navbar = () => {
    return (
        <Nav>
            <Logo>NoteApp</Logo>
            <Button href="#">Create Note</Button>
        </Nav>
    );
};